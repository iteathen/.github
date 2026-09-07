# Repository context: iteathen/.github

This file contains only repository-specific context. Universal engineering, design, execution, evidence, review, and cleanup guidance comes from the account-global `AGENTS.md`.

## Mission

This repository owns account-level public profile content, default community-health files, and the universal agent guidance shared across `iteathen` repositories.

## Local boundaries

- Keep shared community-health content project-neutral.
- Do not place project-specific architecture, lifecycle, support, release, or implementation authority here.
- Do not add personal data, credentials, private contact details, unpublished artifacts, or machine-specific state.
- GitHub Actions in this repository use least-privilege permissions and immutable full-commit action pins.

## Local validation

Run:

```powershell
node tools/verify-community.mjs
git diff --check
```

Inspect the resulting diff before integration.