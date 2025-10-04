# Data Models

This reference describes both the Postgres relational schema and SurrealDB graph records used throughout Love of Food. The goal is to keep transactional data normalized while leveraging SurrealDB for social discovery and activity feeds.

## Postgres Schema

```sql
-- users table stores canonical identities mirrored from NextAuth
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  location TEXT,
  taste_tags JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE recipes (
  id UUID PRIMARY KEY,
  author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  ingredients JSONB NOT NULL,
  steps JSONB NOT NULL,
  images JSONB DEFAULT '[]'::jsonb,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE ratings (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  score INT CHECK (score BETWEEN 1 AND 5),
  flags JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, recipe_id)
);

CREATE TABLE shopping_lists (
  id UUID PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  items JSONB NOT NULL,
  shared_with UUID[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE store_visits (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  store_id TEXT NOT NULL,
  collected_sequence JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE uploads (
  id UUID PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  object_key TEXT NOT NULL,
  mime TEXT NOT NULL,
  size BIGINT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## SurrealDB Schema

```sql
DEFINE TABLE user SCHEMAFULL;
DEFINE FIELD email ON user TYPE string ASSERT $value ?!= '';
DEFINE FIELD name ON user TYPE string;
DEFINE FIELD avatar ON user TYPE string;

DEFINE TABLE recipe SCHEMAFULL;
DEFINE FIELD title ON recipe TYPE string;
DEFINE FIELD tags ON recipe TYPE array;
DEFINE FIELD author ON recipe TYPE record<user>;

DEFINE TABLE liked SCHEMAFULL TYPE RELATION FROM user TO recipe;
DEFINE FIELD created_at ON liked TYPE datetime VALUE time::now();

DEFINE TABLE cooked SCHEMAFULL TYPE RELATION FROM user TO recipe;
DEFINE FIELD created_at ON cooked TYPE datetime VALUE time::now();
DEFINE FIELD notes ON cooked TYPE string;

DEFINE TABLE inspired SCHEMAFULL TYPE RELATION FROM user TO recipe;
DEFINE FIELD created_at ON inspired TYPE datetime VALUE time::now();

DEFINE TABLE follows SCHEMAFULL TYPE RELATION FROM user TO user;
DEFINE FIELD created_at ON follows TYPE datetime VALUE time::now();

DEFINE TABLE store_memory SCHEMAFULL;
DEFINE FIELD store_id ON store_memory TYPE string;
DEFINE FIELD item_id ON store_memory TYPE string;
DEFINE FIELD position_index ON store_memory TYPE int;
DEFINE FIELD last_seen_at ON store_memory TYPE datetime VALUE time::now();
```

## Example Queries

### Personalized Feed

```sql
-- Recipes cooked by users you follow
SELECT ->cooked->recipe.*
FROM user
WHERE id = $userId
FETCH ->follows->user->cooked->recipe;
```

### Store Memory Update

```sql
UPDATE store_memory
SET position_index = $index, last_seen_at = time::now()
WHERE store_id = $store AND item_id = $item;
```

### Graph Edge Creation (Loved Reaction)

```sql
RELATE user:$userId->liked->recipe:$recipeId SET created_at = time::now();
```

For SQLx migrations, see `apps/api/migrations/`. Run with `cargo sqlx migrate run` once the database is running.
