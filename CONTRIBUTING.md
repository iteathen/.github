# Contributing

Public contributions are welcome. Repository-specific instructions, accepted specifications, status documents, and contribution guides take precedence over this shared default.

## AI-assisted development

These projects may use substantial AI-agent assistance in coding, review, research, and documentation. AI output is working material, not validation evidence. Contributors and maintainers remain responsible for understanding what they submit or integrate and for the accuracy of every claim attached to it.

AI-assisted contributions are welcome under the same ownership, review, testing, provenance, security, qualification, and cleanup requirements as any other contribution. Routine AI use does not need a prompt log or tool inventory; disclose material assistance when it affects provenance, licensing, security review, reproducibility, or a repository-specific requirement. Do not cite model agreement or model-to-model review as proof of correctness.

## Before starting

1. Read the target repository's README, `AGENTS.md` or developer guide, status, roadmap, and relevant accepted specifications.
2. Search open issues and discussions before proposing overlapping work.
3. Comment on the owning issue before substantial work, or open a scoped proposal when no issue owns the need.
4. Identify the authoritative owner, important bounds and failure modes, and the cheapest decisive falsifier.

Keep components isolated behind meaningful public contracts. Do not import sibling-repository internals or move product-specific semantics into a generic library for convenience.

## Pull requests

- Keep one coherent ownership-sized change per pull request.
- Add focused tests or evidence appropriate to the claim.
- Update authoritative documentation with behavior or contract changes.
- List checks run and checks not run.
- Never include credentials, private artifacts, generated secrets, or machine-specific state.
- Certify contribution origin with `git commit -s` under the [Developer Certificate of Origin 1.1](https://developercertificate.org/).

Complete the repository's pull-request template. Respond to review with new commits and avoid rewriting shared review history unless a maintainer asks.

By contributing, you agree that your contribution is licensed under the target repository's license. Participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

Suspected vulnerabilities use [private security reporting](SECURITY.md), never public issues or pull requests.
