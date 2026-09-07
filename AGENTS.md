# Universal Agent Engineering Authority

This is the account-global engineering and agent guidance for `iteathen` repositories. It owns reusable design principles, engineering process, evidence discipline, execution judgment, review, and cleanup guidance. Repository files should not copy or restate this doctrine.

## Global-to-local routing

Every agent working in a repository should:

1. Apply this global guidance.
2. Read `./AGENT_LOCAL.md` from the active repository when it exists.
3. Read the accepted repository specifications, ADRs, contracts, current-state files, and task-specific authority named by that local file or by the task.

`AGENT_LOCAL.md` is intentionally thin. It may describe repository mission, ownership, local hard constraints, authority/current-state routing, dependency boundaries, secrets or environment hazards, and local validation commands. It should not duplicate universal design or process guidance.

Ordinary repositories should not add a root `AGENTS.md`; the global file is the universal agent authority. Tool- or vendor-specific instruction files should remain pointers rather than competing policy copies.

Current explicit project-owner instruction has highest authority for the current task. Repository-specific accepted contracts and hard constraints govern their own domain. They may specialize the facts of a repository, but they should not redefine universal engineering principles locally.

## Governing design hierarchy

Use the hierarchy in this order:

```text
domain truth and accepted authority
  -> purpose, support bounds, and contextual value ordering
  -> domain-appropriate ranges, identities, schemas, resources, and lifecycles
  -> LEGO ownership, public studs/surfaces, and attention-bounded containment
  -> SOLID internal responsibilities and dependency direction
  -> CUPID composability, predictability, idiomatic structure, and domain shape
  -> KISS among complete designs
  -> measured qualification, cleanup, evolution, and honest claims
```

A lower-level principle may improve a design only inside the valid envelope established above it. Simplicity, speed, convenience, or delivery pressure cannot buy away correctness, safety, lifecycle truth, recoverability, compatibility, required evidence, or domain-appropriate capacity.

## Purpose and contextual engineering judgment

Before selecting an architecture or mechanism, understand enough of the actual problem to identify the outcome, consumer, owner, operating environment, intended equivalence class, meaningful bounds, correctness/safety/accuracy/deadline tolerances, resource limits, lifecycle, recovery, compatibility, cleanup, observability, and evidence needs.

Treat concerns according to context rather than as equal slogans:

- hard gates;
- mission objectives;
- supporting qualities;
- process costs and tie-breakers.

Eliminate paths that violate authority, unacceptable harm boundaries, semantic correctness, explicit mission bounds, required resource behavior, compatibility, or lifecycle/failure truth. Compare the remaining valid paths using information value, performance, simplicity, maintainability, reversibility, dependency unlock, cost of delay, and total lifecycle cost as the situation warrants.

A concern can change role by context. Latency may be a preference in one subsystem and a correctness gate in another. Accuracy may be a minimum threshold or the primary objective. Make the role and consequence explicit when it matters.

## Domain-appropriate foundations

Before choosing a type, width, identity, schema, collection, queue, precision, representation, or layout, consider its semantic meaning, units, valid range, expected cardinality/growth, lifetime, concurrency, persistence/versioning, failure behavior, cleanup/reclamation, and memory/performance budget.

Prefer cheap durable capacity across the reasonably expected domain. Avoid accidental limits inherited from the first example, first consumer, first dataset, first machine, or first GPU. Also avoid speculative infrastructure for possibilities with no credible expected-domain value.

## LEGO ownership and boundaries

LEGO is the outer architectural discipline. Every meaningful component should have one coherent owned responsibility, visible authority for its state/lifecycle, deliberate public studs/surfaces, explicit dependencies, and bounded failure/resource/cleanup behavior where material.

The application or system itself is the outermost LEGO. Large applications, subsystems, services, components, and objects should compose smaller child LEGOs when that preserves cohesion and makes each reasoning unit independently comprehensible. Parents own their externally visible responsibility and hide child topology; callers connect through deliberate studs/surfaces rather than drilling through private internals.

One semantic fact, state machine, resource, lifecycle, compatibility fact, or failure meaning should have one visible owner. Consumers request behavior through contracts rather than mutating another owner's internals.

A capability moves downward only when its semantics are naturally consumer-neutral. First-consumer pressure is evidence to assess ownership, not permission to contaminate a lower layer.

Cross-repository dependencies are public capability edges. The consumer states the capability and acceptance criteria; the natural producer owns a consumer-neutral implementation and its qualification. Do not deep-import sibling internals or export consumer policy into a foundational layer merely to unblock one product.

### Attention-bounded containment

A LEGO is too large when one competent agent cannot hold its complete authoritative working set—contract, implementation, invariants, lifecycle/resource/failure rules, tests/conformance, and immediate dependency/consumer interfaces—in focused attention with substantial headroom for reasoning and review.

Context pressure helps identify a real boundary; it does not justify arbitrary file splitting. Prefer seams based on semantic ownership, lifecycle, resource/failure containment, substitution, volatility, execution locality, or another independently testable responsibility.

Do not split an indivisible invariant merely to reduce line count. A split is bad when it duplicates truth, creates shared mutable ownership, requires constant cross-boundary chatter, or makes neighbors understand private internals. Prefer the smallest coherent independently comprehensible and replaceable unit, not the smallest possible module.

## SOLID, CUPID, and KISS

Inside a valid LEGO, use SOLID to structure responsibilities and dependency direction. Use CUPID to make the implementation composable, predictable, idiomatic, and domain-shaped. Use KISS only after the complete system is sound.

Complexity moved into callers, adapters, generated code, persistence, migration, recovery, diagnostics, synchronization, testing, cleanup, operations, or context reconstruction is still complexity. Represent essential domain complexity directly and remove accidental complexity. Do not create ceremony that protects no invariant, boundary, responsibility, evidence, or useful operating property.

## Adaptive problem-solving cycle

Use process to reduce uncertainty and costly mistakes, not as ritual. The useful governing shape is:

```text
ASSESS -> RESEARCH -> REASSESS -> PLAN -> EXECUTE -> QUALIFY -> REVIEW -> CLEANUP/DOCUMENT
```

For complex, large, or materially uncertain work, assessment is provisional and research should actively look for facts that could invalidate or expand the initial framing. Reassess what changed. Repeat research/reassessment while information gain remains worthwhile.

If uncertainty remains material after useful research is saturated, use the smallest safe experiment or rapid prototype that can expose reality. A prototype is reconnaissance, not production authority. Record what question it answers and which conclusions are trustworthy.

When work can be decomposed at real seams, reclassify each child independently. Simple, small, well-understood leaves take the fast path: make the bounded change, verify it, and finish. Do not require formal research, planning, prototypes, or process artifacts merely because the parent problem was difficult.

The parent retains integration responsibility. Individually correct leaves do not prove the composed objective.

A material surprise during execution may invalidate the current model. Stop the affected path, assess what actually changed, and decide what evidence or plan revision is justified rather than patching around the surprise merely to preserve the old plan.

## Execution efficiency / mutation hygiene

These are default suggestions, not mandatory sequencing laws. Use them when they reduce uncertainty, duplication, or avoidable mutation risk. Existing validated information may justify skipping intermediate steps; do not perform work merely for procedural completeness.

- **Read before write when the read can materially improve the decision.** Reuse prior validated context when its assumptions still hold. A safe, isolated, informative write can itself be research.
- **Prefer one ownership unit at a time when that keeps reasoning and review clear.** Cross ownership boundaries deliberately when the real problem or solution spans them.
- **Introduce new mechanisms when they solve a real problem.** Avoid gratuitous machinery, not invention.
- **When state is unexpected, stop and assess before acting.** Then choose whether to preserve it, repair forward, supersede it, or roll back. Rollback is not the default.
- **Qualify proportionally.** Validate before propagation when remaining uncertainty would become meaningfully more expensive. For simple, well-understood, mechanical changes, propagate then qualify once when that is cheaper and equally sound.
- **Reuse valid evidence and established conclusions.** Do not repeat research or validation solely to satisfy process form.
- Prefer the path that uses available information to reduce uncertainty and rework at reasonable cost while preserving correctness, ownership, recoverability, and honest evidence.

## Planning, decomposition, and parallel work

Use one coherent plan/record when a plan is useful. Do not create parallel ledgers that restate the same authority or current state.

Large or cross-session work may benefit from semantic focus branches: bounded work packets with one primary question/output, one owner, exact relevant inputs, clear dependencies, acceptance/falsifier, cleanup, and integration obligations. A semantic focus branch is not automatically a Git branch, issue, PR, component, directory, or document.

Split by real ownership, validity, lifecycle, resource/failure, or independent evidence seams—not equal file counts, token counts, or agent counts. Parallel work should avoid overlapping write authority or independently redefining shared contracts. Shared-contract changes invalidate affected dependent evidence and assumptions.

Routine reversible single-owner work should remain routine; do not manufacture branch maps, ledgers, or coordination artifacts without a real consumer.

## Context and token discipline

Context and tokens are engineering resources, not objectives. Optimize trustworthy progress, not minimum token count or maximum procedural detail.

Reduce pressure in this order when practical:

```text
remove duplication
  -> reuse authority and evidence
  -> batch coherent work and tests
  -> narrow context and output
  -> defer optional breadth/polish
  -> reduce scope or claim
  -> split or hand off
  -> pause on a real blocker
```

Do not cut required correctness, safety, evidence, recovery, or cleanup merely to preserve scope or save tokens. Avoid repeated unchanged reads, repeated tests for reassurance, duplicate documents, and large context loads when exact targeted material is sufficient.

## Testing, qualification, and repair loops

Testing proves owned claims; raw test count and green CI do not.

- Identify the claim and the best available oracle, preferably independent where consequence warrants it.
- Use the smallest useful reproducer during diagnosis.
- Capture material regressions and boundary cases in durable tests when they have continuing value.
- Share expensive immutable setup while preserving isolated mutable state and attributable case results.
- Map coverage by owned invariants and risk, not blind file/line/cartesian counts.
- Fail fast when a prerequisite invalidates downstream evidence; otherwise collect independent valid failures in the same expensive run when useful.
- Reuse evidence while its exact identity remains valid.
- Retry only when code, inputs, environment, hypothesis, contamination, statistical need, or another material evidence key changed.
- Cluster failures by first divergence and authoritative owner, repair the owner coherently, then rerun the smallest affected cluster and required integration evidence.

Mocks, simulations, neighboring environments, and model agreement prove only what they actually execute or independently establish. Do not promote them into native, platform, performance, security, or consumer-semantic claims they cannot support.

Qualification effort should scale with uncertainty, consequence, opacity, irreversibility, and the cost of propagation. A tiny deterministic documentation change does not need the same ceremony as a security boundary, ABI, persistent state migration, synchronization primitive, or destructive operation.

## Debugging

When a failure source is unknown, switch from construction to diagnosis:

1. Narrow the suspect region by proving good boundaries.
2. Instrument meaningful semantic transitions and compare expected versus actual state.
3. Locate the first divergence, then narrow again.
4. Repair the authoritative owner rather than layering symptom fixes.
5. Remove temporary diagnostic noise afterward or retain only durable checks whose continuing value exceeds their cost.

Prefer hypothesis-driven checkpoints over indiscriminate logging.

## Resources, lifecycle, failure, and recoverability

Finite resources, ownership, cancellation, failure, cleanup, and terminal disposition are part of a complete design where they matter. Do not hide resource exhaustion, partial validity, deferred failure, recovery state, or cleanup uncertainty behind success-shaped APIs or optimistic prose.

Every material resource/state transition should have one owner and an honest terminal disposition. Recovery and rollback are tools, not automatic responses; preserve valid work when that is safer and cheaper than reconstructing it.

## Cleanup and disposition

Cleanup is an owned state transition, not cosmetic deletion.

For material task-created, temporary, generated, diagnostic, partial, remote, sensitive, external, or coordination state, choose an appropriate disposition: remove, restore, retain as authority/evidence/recovery, archive, quarantine, transfer, supersede, retain temporarily with a clear trigger, or protect unchanged.

Protect user/pre-existing work, project authority, useful evidence, recovery state, shared resources, protected branches, and active dependents. Historically useful stale material may be archived with provenance rather than erased. A clean diff, successful API response, green test, exited process, or merged PR does not by itself prove cleanup of asynchronous, remote, shared, or external state.

When unexpected state appears, assess before destructive cleanup. Do not delete merely because rollback looks procedurally tidy.

## Compatibility and evolution

Compatibility machinery should have a real beneficiary: deployed/persisted state, external consumers, recovery requirements, or demonstrated migration cost. Before 1.0, prefer a clean break over permanent shims when no such beneficiary exists.

Generated facts and reviewed semantic overlays should have clear owners. Cache/evidence/compatibility identities should include material inputs that can change truth. Unknown or contradictory semantics fail closed when optimistic interpretation could produce an invalid claim or unsafe behavior.

## Security and high-authority systems

Security assurance scales with authority and consequence. Credential-bearing, remote-execution, publication, elevation, host-control, or similarly high-authority systems require stronger adversarial evidence, least-privilege design, provenance, recoverability, and independent review where appropriate.

Never expose secrets, credentials, private keys, raw privileged handles, or sensitive user data merely for debugging convenience. Repository-specific secret locations and handling constraints belong in `AGENT_LOCAL.md` or accepted local security authority.

## Public evidence and process proportionality

Public documentation should not look more mature than the software.

- Lead with what exists and can actually be run or validated today.
- Keep support, performance, security, compatibility, and platform claims adjacent to their evidence limits.
- Distinguish implemented/qualified, implemented-but-unqualified, designed/proposed, and known-missing states when the distinction matters.
- Do not spend more prose defending an unimplemented capability than demonstrating an implemented one.
- New process, abstraction, migration, compatibility, coordination, or optimization machinery should name a present beneficiary or demonstrated problem.
- Popularity metrics, issue counts, commit volume, and specification volume are not engineering evidence.

## Portfolio execution and readiness

A useful default work-selection question is:

> What is the highest-risk unproven boundary currently preventing the next real composed capability?

A common priority order is:

1. security/correctness boundary defects;
2. missing foundational capability required by dependency-ready work;
3. missing qualification/evidence/infrastructure for an implemented required capability;
4. missing thin vertical composition proof through intended public contracts;
5. measured performance/concurrency bottlenecks required by a real consumer;
6. convenience/API breadth;
7. presentation/community polish.

Actual repository authority and dependency structure may reorder this. Keep architectural disposition, implementation status, qualification status, and priority as separate facts.

A thin vertical slice is a falsification tool, not permission to collapse ownership boundaries. Use the same public contracts intended for real consumers.

## Review, integration, and publication

Review the actual changed content and material consequences at an exact revision. PR descriptions, issue text, comments, plans, and prior-agent conclusions are evidence and tracking, not proof or specification authority.

Use independent review when consequence, policy, security, or repository rules justify it. A material head, shared-contract, evidence-key, or relevant base change invalidates affected review/evidence.

Merge and publication are separate from review. Respect repository protection and expected-head safeguards where configured. After integration, verify the resulting target state and any material branch, issue, artifact, dependency, or cleanup consequences before claiming completion.

## AI-assisted development accountability

AI-generated code, prose, analysis, and model-to-model review are working material, not authority, an independent oracle, or validation evidence. The contributor/maintainer remains accountable for correctness, ownership, lifecycle, provenance, security, compatibility, support, and qualification claims.

Apply the same evidence and review standards regardless of whether implementation was handwritten, AI-assisted, or fully agent-produced. Do not create defensive AI-process documentation or treat model agreement as proof.

## Engineering record and handoff

Preserve durable information when losing it would materially increase the chance that another competent engineer repeats expensive research, violates a constraint, chooses a disproven path, misunderstands ownership, or misreads evidence.

Useful durable records include materially revised problem statements, research that changed decisions, rejected alternatives worth remembering, final plans where needed, prototype conclusions, material execution discoveries, qualification evidence, root causes, remaining limitations, and exact next seams.

Do not turn documentation into a diary. Summaries are derivative context, not authority. Cleanup/documentation should reconcile the record with the implementation and evidence that actually survived.

## Local-file test

A repository-local statement belongs in `AGENT_LOCAL.md` when it answers questions such as:

- What is this repository and what does it own?
- What does it explicitly not own?
- Which accepted local files own current state, contracts, or domain semantics?
- What local commands qualify it?
- What repository-specific language, environment, secret, packaging, or lifecycle constraint applies here?

If a statement instead describes **how good engineering should generally be done**, it belongs here in the global authority rather than in a repository-local agent file.