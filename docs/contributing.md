# Contributing Guide

Thank you for considering a contribution! We strive to keep onboarding friendly and transparent.

## Quickstart Checklist

1. Read the Code of Conduct (`docs/code-of-conduct.md`).
2. Fork the repository and clone your fork.
3. Run `./scripts/install_all.sh` to bootstrap dependencies.
4. Create a feature branch following the convention `feature/<short-description>`.
5. Ensure your changes are fully commented, tested, and documented (update `/docs`, `/wiki`, or `/web` as appropriate).
6. Run `make test` before opening a pull request.

## Development Standards

* **Rust-first**: Business logic lives in Rust crates. JavaScript/TypeScript is limited to UI composition.
* **SurrealDB-first**: Prefer graph operations where relationships matter; fall back to Postgres for strong consistency.
* **Comment everything**: Explain intent, trade-offs, and future considerations.
* **Small PRs**: Limit scope to one feature or bug fix whenever possible.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(api): add shopping list reorder endpoint
fix(web): correct recipe form validation
```

## Testing

* `cargo test` — Backend unit/integration tests.
* `pnpm run test` — Frontend unit tests.
* `pnpm run lint` / `pnpm run typecheck` — Static analysis.
* `cargo fmt` / `cargo clippy` — Style and lint.

## Documentation Workflow

Whenever you modify features or flows, update:

* `docs/` for operator and contributor guidance.
* `wiki/` for end-user walkthroughs.
* `web/` for promotional updates.

## Pull Request Expectations

* Link to related issues.
* Include screenshots for UI changes.
* Provide testing evidence in the PR description.
* Request review from at least one maintainer.

Thank you for helping us build a community-owned food platform!
