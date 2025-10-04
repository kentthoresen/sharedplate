# Getting Started with Love of Food

Welcome! This guide walks maintainers through a complete local setup in about 15 minutes. Every command is safe to re-run and logs are captured under `scripts/logs/` for troubleshooting.

## Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| Rust | stable (via rustup) | `rustup default stable`
| Node.js | 20.x | Install via `fnm`, `nvm`, or system package manager
| pnpm | 8.x | `npm install -g pnpm`
| Docker | Latest | Required for Postgres, SurrealDB, MinIO, and NATS
| SurrealDB CLI | 1.3+ | Used for schema migrations and debugging
| NATS CLI (`nats`) | optional | Useful for inspecting subjects during dev

## Environment Variables

Copy the provided samples and adjust values as needed:

```bash
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
cp infra/docker/.env.example infra/docker/.env
```

Ensure Google OAuth credentials and SMTP settings are populated before attempting federated login. The Email magic link provider requires a trusted SMTP server.

## One-command Install

Run the orchestrated installer from the repo root:

```bash
./scripts/install_all.sh
```

The script performs the following steps with verbose logging:

1. Validates prerequisites (rustc, cargo, node, pnpm, docker, surreal).
2. Bootstraps environment files if missing.
3. Spins up infrastructure via Docker Compose.
4. Builds the Rust API and Next.js web app.
5. Seeds demo data (users, recipes, shopping lists) if `SEED_DEMO=true`.
6. Performs health checks against all services.

Logs are written to `scripts/logs/install-all-<timestamp>.log` and per-service installers log to `scripts/logs/<service>-install-<timestamp>.log`.

## Auth Provider Setup

1. **Google**: Visit [Google Cloud Console](https://console.cloud.google.com/). Create OAuth credentials with `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
2. **GitHub**: Create an OAuth app in your GitHub settings with callback `http://localhost:3000/api/auth/callback/github`.
3. **Apple**: Configure Sign In with Apple in the developer portal using the provided bundle ID.
4. **Email Magic Link**: Set `EMAIL_SERVER` to a secure SMTP URI (e.g., Mailgun). Ensure DKIM/SPF records are configured for deliverability.

Populate the secrets in `apps/web/.env` and restart the web service.

## Running Services

* `make up` — Start Docker dependencies and both apps in watch mode.
* `make api` — Run the Rust API with live reloading via `cargo watch`.
* `make web` — Run the Next.js development server.
* `make test` — Execute all frontend and backend tests.

## Troubleshooting

* **Docker container fails**: Check `docker compose logs <service>` and ensure ports 5432, 8000, 9000, and 4222 are free.
* **JWT validation errors**: Confirm the web app is accessible at `NEXTAUTH_URL` and the API can reach `/api/auth/jwks`.
* **Email login missing**: Inspect `scripts/logs/web-install-*.log` for SMTP configuration hints.

If you encounter an issue not covered here, open a GitHub issue with the installer logs attached.
