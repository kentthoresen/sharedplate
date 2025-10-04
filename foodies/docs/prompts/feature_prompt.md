# Feature Implementation Prompt

Use this prompt when asking an AI pair-programmer to implement a new feature or refactor within the Shared Plate monorepo.

## Context
- Repository: `Love of Food — Shared Plate` monorepo.
- Backend: Rust services located under `apps/api` and shared crates in `packages`.
- Frontend: Next.js app in `apps/web` leveraging TypeScript and Tailwind CSS.
- Database: SurrealDB is the preferred and currently integrated datastore.

## Prompt Template
```
You are contributing to the Shared Plate monorepo. Implement the requested feature while adhering to these rules:
1. Keep core logic in Rust. When editing the Next.js frontend, keep TypeScript changes minimal and well-typed.
2. Prefer integrating existing open-source crates. Document justification if a new dependency is required.
3. Comment every code block, explaining why it exists and how it operates.
4. Update related docs: `/docs` for operator details, `/wiki` for user-facing guidance, `/web` for marketing copy.
5. Provide or update setup scripts in `/scripts` to cover new dependencies, ensuring they are idempotent and log to `install_<feature>.log`.
6. Run or document all relevant tests (Rust `cargo test`, frontend checks, linting) before completion.
7. Maintain accessibility and privacy guarantees in both backend and frontend work.
```

## Usage Notes
- Customize the placeholder `<feature>` in the script log name to match the change.
- Attach acceptance criteria and domain-specific details after the template for clarity.
- If a migration or schema update is required, include SurrealDB change steps explicitly.
