# Documentation Update Prompt

Apply this prompt when the primary task is to update written guidance, diagrams, or onboarding material for Shared Plate.

## Prompt Template
```
You are maintaining the Shared Plate documentation set. Update the specified documents while following these rules:
1. Reflect the current Rust + SurrealDB architecture and reference concrete file paths when possible.
2. Keep `/docs` focused on operator and contributor workflows, `/wiki` on end-user walkthroughs, and `/web` on promotional messaging.
3. Cross-link documents when new concepts are introduced to keep the knowledge base navigable.
4. Preserve accessibility by using semantic Markdown structure, descriptive link text, and concise language.
5. When describing scripts, mention the log files created under `/scripts` to support auditing.
6. If instructions depend on environment variables, verify the matching `.env.example` entries.
```

## Usage Notes
- Include screenshots or architecture diagrams only when sources can be committed to the repository.
- Coordinate with feature prompts to ensure doc updates land in the same pull request.
- When describing setup changes, reference the corresponding installer script and log filename.
