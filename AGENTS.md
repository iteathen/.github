# Shared GitHub community standards

This repository owns account-level public profile content and default community-health files for `iteathen` repositories.

## Boundary

- Keep guidance project-neutral and useful when inherited by any public repository.
- A repository's own accepted instructions, security policy, contribution guide, templates, or governance override these defaults.
- Do not copy project-specific architecture, lifecycle, support, release, or implementation authority here.
- Link projects through their public contracts and public repositories; never depend on sibling internals.
- Do not add personal data, credentials, private contact details, unpublished artifacts, or machine-specific state.
- GitHub Actions use least-privilege permissions and immutable full-commit action pins.

## Portfolio execution and readiness gate

Unless a repository's accepted authority says otherwise, meaningful work selection, planning, review, and closure use this portfolio lens in addition to repository-specific rules.

Start with one question:

> What is the highest-risk unproven boundary currently preventing the next real composed capability?

Classify the blocker before proposing work. The default priority order is:

1. security or correctness boundary defect;
2. missing foundational capability required by dependency-ready downstream work;
3. missing qualification, evidence, or qualification infrastructure for an implemented required capability;
4. missing thin vertical composition proof through real public contracts;
5. measured performance or concurrency bottleneck required by a real consumer;
6. convenience or API-surface expansion;
7. community, adoption, or presentation polish.

Accepted repository authority and the actual dependency graph may reorder these classes, but issue age, issue count, specification count, commit volume, stars, forks, or watchers do not.

Apply these rules:

- Keep architectural disposition, implementation status, qualification/support status, and priority as separate facts. Never infer one from another.
- A missing physical host, GPU, CI runner, hypervisor, external control-plane mutation, or other qualification environment is an evidence/infrastructure gap unless code is independently falsified. Do not manufacture a code fix for absent evidence.
- Qualification infrastructure is product infrastructure when a support claim depends on it. Give it ownership, acceptance criteria, maintenance, and explicit dependency status.
- Cross-repository dependencies are public capability edges. The consumer states the required public capability and acceptance criteria; the producer owns a consumer-neutral implementation and its qualification. Never couple through sibling internals or export consumer policy into a foundational library merely to unblock one product.
- A downstream urge to add native code, bypass a public contract, or build an awkward local workaround is a capability-ownership diagnostic. Classify the missing generic capability before implementing the escape path.
- Specifications are valuable when they protect a real boundary or authorize the next executable step. Once a boundary is sufficiently specified, prefer the thinnest meaningful end-to-end falsifier over additional speculative layering. Freeze architecture expansion when existing abstractions remain materially unexercised.
- Do not make concurrency, multi-streaming, optimization, or API breadth a priority merely because a theoretical ceiling exists. Promote it when a dependency-ready consumer or measured bottleneck requires it.
- Security assurance scales with authority. Credential-bearing, remote-execution, publication, elevation, host-control, or similarly high-authority systems require proportionally stronger adversarial evidence and an explicit independent-review gate before broad deployment.
- A thin vertical slice is a falsification tool, not permission to collapse ownership boundaries. It must compose through the same public contracts intended for real consumers.
- PRs and closure records state which blocker class changed, what exact evidence supports the transition, what remains unproven, and which downstream capability is newly unblocked.

## Public evidence and process proportionality

Public documentation must not look more mature than the software.

- A repository README leads with: what the project does today; what can actually be run or validated today; the exact support/qualification limits; then architecture and roadmap links. A specification-only project says so on the first screen.
- Prefer short current-state statements over defensive prose about architectural ceilings. Put future capability rationale, rejected alternatives, and detailed architecture in owned design documents rather than arguing with hypothetical skeptics in the README.
- Never spend more public prose defending an unimplemented capability than demonstrating an implemented one.
- Security-facing claims distinguish **enforced and qualified**, **implemented but not fully qualified**, **designed/proposed**, and **known missing** properties. Limitations that materially change the trust claim stay near the claim, not buried later.
- New process, coordination, compatibility, migration, abstraction, or policy machinery names its present beneficiary: a real consumer, persisted/deployed state, security/recovery boundary, external contract, or demonstrated cost of changing later. Future possibility alone is not enough to implement machinery now.
- Before 1.0, compatibility shims and migration layers require evidence of an actual external/deployed/persisted dependency. When none exists, prefer the clean break and preserve only concise historical provenance when useful.
- Tool- or vendor-specific agent entry files remain tiny pointers to one canonical instruction source; they do not duplicate policy.
- When existing architecture is sufficiently specified but materially unexercised, the next architecture work is a thin executable falsifier through intended public contracts unless new evidence shows a specific unresolved design question.
- README/API/community polish follows executable truth. GitHub popularity metrics do not measure engineering quality, but the absence of consumers weakens the case for consumer-protection machinery that has no demonstrated beneficiary.

## Validation

Run before completion:

```powershell
node tools/verify-community.mjs
git diff --check
```

Inspect the full diff, commit coherent work with a Developer Certificate of Origin sign-off, use a pull request, and merge only the exact reviewed head after required checks pass.
