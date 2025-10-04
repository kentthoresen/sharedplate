.PHONY: up down logs api web test seed

up:
docker compose -f infra/docker/docker-compose.yml --env-file infra/docker/.env up -d

down:
docker compose -f infra/docker/docker-compose.yml --env-file infra/docker/.env down

logs:
docker compose -f infra/docker/docker-compose.yml --env-file infra/docker/.env logs -f

api:
cd apps/api && cargo watch -x run

web:
cd apps/web && pnpm dev

test:
cd apps/api && cargo test && cd ../web && pnpm test -- --run

seed:
./scripts/seed.sh
