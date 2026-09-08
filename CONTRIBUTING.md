# Contributing

Only changes produced by `iteathen` or by an agent explicitly authorized by the repository owner are eligible for integration into `iteathen` repositories. External people, accounts, bots, automated dependency services, and unsolicited agents are untrusted contribution sources: their proposed repository mutations are not merged, cherry-picked, copied, or used as qualification/evidence authority.

External reports and ideas may still be useful as leads. When one identifies a real issue, dependency update, or improvement, reassess it from authoritative upstream sources and independently reconstruct any accepted change on an owner/authorized-agent-controlled branch. See [Contribution Trust Policy](CONTRIBUTION_TRUST.md).

Repository-specific instructions, accepted specifications, status documents, and contribution guides may further constrain work but do not relax this trust boundary unless the repository owner explicitly changes it.

## AI-assisted development

These projects may use substantial AI-agent assistance in coding, review, research, and documentation. An agent is trusted for integration only when it is explicitly authorized by the repository owner for the task and operates through owner-controlled provenance. AI output is still working material, not validation evidence. The owner remains responsible for the accuracy of every claim integrated from agent work.

Apply the same ownership, review, testing, provenance, security, qualification, and cleanup requirements to authorized agent work as to owner-produced work. Routine AI use does not make model agreement or model-to-model review proof of correctness.

## Owner and authorized-agent workflow

1. Read the target repository's README, `AGENTS.md` or developer guide, status, roadmap, and relevant accepted specifications.
2. Search current issues and protected state before proposing overlapping work.
3. Identify the authoritative owner, important bounds and failure modes, and the cheapest decisive falsifier.
4. Work through an owner-controlled or explicitly authorized-agent-controlled branch/ref.
5. Treat outside pull requests, patches, commits, suggestions, bot updates, and reviews only as untrusted leads; independently reconstruct any useful change from authoritative sources.

Keep components isolated behind meaningful public contracts. Do not import sibling-repository internals or move product-specific semantics into a generic library for convenience.

## Pull requests

- Keep one coherent ownership-sized change per pull request.
- Add focused tests or evidence appropriate to the claim.
- Update authoritative documentation with behavior or contract changes.
- List checks run and checks not run.
- Never include credentials, private artifacts, generated secrets, or machine-specific state.
- For owner-authored commits, certify contribution origin with `git commit -s` where repository policy requires it.
- Do not treat Git author/committer/display-name strings alone as trust evidence; verify owner-controlled provenance and protected-state integration.

Complete the repository's pull-request template. Preserve shared review history unless the owner directs otherwise.

Repository licensing continues to govern integrated work. Participation in public project spaces is governed by the [Code of Conduct](CODE_OF_CONDUCT.md), but participation does not imply that submitted repository changes are eligible for integration.

Suspected vulnerabilities use [private security reporting](SECURITY.md), never public issues or pull requests.
