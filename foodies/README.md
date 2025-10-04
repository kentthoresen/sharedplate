# Love of Food — Shared Plate

"Love of Food" (codename: **Shared Plate**) is an open, donation-funded platform for sharing recipes, cooking stories, and community-led shopping lists. This repository contains the full stack implementation, including a Rust-first backend, SurrealDB-powered social graph, and a Next.js experience for both marketing pages and the logged-in application. All code is heavily documented so that new contributors can be productive on day one.

## Monorepo Layout

```text
apps/          # Application services (web frontend and Rust API)
packages/      # Shared crates or component libraries
infra/         # Docker, Fly.io, and Terraform setup
scripts/       # Installers, health checks, seeds, and logs
wiki/          # End-user documentation (mirrors GitHub wiki)
web/           # Static promotional site for GitHub Pages
docs/          # Operator / contributor documentation
```

## Getting Started (TL;DR)

1. Ensure you have Rust (latest stable), Node.js 20+, pnpm, Docker, and SurrealDB CLI available.
2. Copy every `.env.example` to `.env` and fill in provider secrets.
3. Run the orchestrated installer: `./scripts/install_all.sh`.
4. Visit `http://localhost:3000` for the web app and `http://localhost:8080` for the API health endpoint.

For detailed instructions, read `docs/getting-started.md` and the wiki guides.

## Philosophy

* **Community-owned:** Sustained entirely by donations, never ads.
* **Privacy-respecting:** Opt-in telemetry only; no default analytics or tracking pixels.
* **Accessible:** Designed to work with screen readers and keyboard navigation.
* **Fork-friendly:** Licensed to encourage sharing while protecting user freedoms.

## Contributing

Please review `docs/contributing.md`, `docs/code-of-conduct.md`, and the governance documentation before opening a pull request. We expect clear commit messages, thorough tests, and empathetic code review.

## License Overview

* Backend services, infrastructure, and documentation: **AGPL-3.0-or-later**.
* Frontend component library and marketing content: **MIT**.

See the `LICENSE` file for full terms and the `apps/web/LICENSE` note for the MIT-licensed subset.

## Status

This repository is under active construction. Refer to the CHANGELOG for high-level progress and planned milestones.

## Architecture Review Summary

An April 2024 audit verified that the backend adheres to the intended layered Axum architecture and that all core services are implemented in Rust. The write-up, including recommended follow-up items, is available in [`docs/ARCHITECTURE_REVIEW.md`](docs/ARCHITECTURE_REVIEW.md).
