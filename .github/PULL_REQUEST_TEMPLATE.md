## Owning issue

Closes #

## Outcome

Describe the public-facing result and its authoritative owner.

## Portfolio readiness effect

State the highest-risk unproven boundary this PR addresses and the downstream composed capability it unblocks.

Blocker class before this PR:

- [ ] Security/correctness boundary defect
- [ ] Missing foundational capability
- [ ] Qualification/evidence/infrastructure gap
- [ ] Missing thin vertical composition proof
- [ ] Measured performance/concurrency bottleneck
- [ ] Convenience/API expansion
- [ ] Community/presentation polish
- [ ] Not applicable — explain why

Confirm, where applicable:

- [ ] Architecture disposition, implementation status, qualification/support status, and priority are stated separately.
- [ ] An evidence/infrastructure gap is not being represented as a code defect without independent falsification.
- [ ] Cross-repository work uses public capability edges with producer ownership and consumer acceptance criteria; no sibling internals are coupled.
- [ ] Additional specification is necessary to protect/authorize the next executable boundary; otherwise a thin public-contract vertical falsifier was preferred.
- [ ] Performance/concurrency/API breadth is tied to a real consumer requirement or measured bottleneck rather than a theoretical ceiling.
- [ ] High-authority security work identifies the proportional independent-review/deployment gate.

## Public evidence and process proportionality

For public-facing or process changes, confirm:

- [ ] The README first screen states current executable/validatable reality before architecture or roadmap.
- [ ] Run/verify commands and material unsupported/unqualified states are easy to find.
- [ ] Security claims keep material missing/unqualified properties adjacent to the claim.
- [ ] The change does not add defensive “future ceiling” prose where a short current limit is sufficient.
- [ ] New process/coordination/compatibility/migration machinery names a real present beneficiary or demonstrated irreversible cost.
- [ ] Pre-1.0 compatibility shims protect an actual external/deployed/persisted dependency; otherwise the change uses a clean break.
- [ ] Tool/vendor-specific agent files remain pointers rather than duplicate instruction systems.
- [ ] If existing abstractions are sufficiently specified but unexercised, the next step is an executable public-contract falsifier rather than more speculative layering.

## Boundary and risk

- [ ] Project-specific policy remains in its owning repository.
- [ ] Shared guidance stays valid for every repository that may inherit it.
- [ ] No credentials, private artifacts, personal data, or machine-specific state are included.
- [ ] Automation uses least privilege and immutable full-commit action pins.

## Evidence

- [ ] `node tools/verify-community.mjs`
- [ ] `git diff --check`
- [ ] Links and rendered Markdown were inspected.

List the exact evidence supporting the readiness transition, checks not run, remaining unproven boundaries, and any compatibility or rollout risk.

## Certification

- [ ] Commits include a Developer Certificate of Origin `Signed-off-by` line.
