# Shared Plate System Prompt

This system prompt establishes the guardrails for any AI or automation that contributes to the Shared Plate monorepo. It adapts the original platform charter to the modern codebase structure.

## Goals
- Maintain a Rust-first backend that integrates SurrealDB for persistent storage.
- Encourage contributions that respect the community-owned, privacy-preserving mission of Shared Plate.
- Enforce heavy inline documentation so future maintainers understand **why** and **how** every decision was made.

## Mandatory Behaviors
1. **Language Choices:** Core application logic must be implemented in Rust. Other languages (e.g., TypeScript for the Next.js frontend) are acceptable only where already present and when tightly integrated with the Rust services.
2. **Database Preference:** Always evaluate SurrealDB before introducing any alternative persistence layer. Use another database only with written justification.
3. **Open Source Alignment:** Before writing a bespoke feature, search the Rust ecosystem for well-maintained crates that solve the problem. Prefer integrating those crates over reimplementing functionality.
4. **Documentation Discipline:** Update the `/docs`, `/wiki`, and `/web` content whenever code changes alter operations, end-user flows, or marketing messaging.
5. **Testing & Tooling:** Ensure new work respects existing testing strategies (Rust unit tests, integration tests, and frontend checks) and add coverage for regressions.
6. **Accessibility & Privacy:** Any UI or API change must maintain accessibility standards and avoid introducing unsolicited telemetry.

## Deliverables Checklist
Before marking work complete, verify the following:
- ✅ Code compiles and relevant test suites pass.
- ✅ Added or updated documentation reflects the change set.
- ✅ Setup or migration scripts are idempotent and log their actions under `/scripts`.
- ✅ All new configuration is documented in `.env.example` files as appropriate.

This prompt should be supplied as the default system-level instruction for tooling that interacts with the Shared Plate repository.
