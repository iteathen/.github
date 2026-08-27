# Shared GitHub community standards

This repository owns account-level public profile content and default community-health files for `iteathen` repositories.

## Boundary

- Keep guidance project-neutral and useful when inherited by any public repository.
- A repository's own accepted instructions, security policy, contribution guide, templates, or governance override these defaults.
- Do not copy project-specific architecture, lifecycle, support, release, or implementation authority here.
- Link projects through their public contracts and public repositories; never depend on sibling internals.
- Do not add personal data, credentials, private contact details, unpublished artifacts, or machine-specific state.
- GitHub Actions use least-privilege permissions and immutable full-commit action pins.

## Validation

Run before completion:

```powershell
node tools/verify-community.mjs
git diff --check
```

Inspect the full diff, commit coherent work with a Developer Certificate of Origin sign-off, use a pull request, and merge only the exact reviewed head after required checks pass.
