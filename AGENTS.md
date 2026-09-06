# Shared GitHub community standards

This repository owns account-level public profile content and default community-health files for `iteathen` repositories.

## Boundary

- Keep guidance project-neutral and useful when inherited by any public repository.
- A repository's own accepted instructions, security policy, contribution guide, templates, or governance override these defaults.
- Do not copy project-specific architecture, lifecycle, support, release, or implementation authority here.
- Link projects through their public contracts and public repositories; never depend on sibling internals.
- Do not add personal data, credentials, private contact details, unpublished artifacts, or machine-specific state.
- GitHub Actions use least-privilege permissions and immutable full-commit action pins.

## Attention-bounded LEGO architecture

LEGO is the outer architectural discipline for component boundaries. It governs not only ownership, but also universality, replaceability, scope containment, damage-limiting encapsulation, and the amount of context required to reason correctly about one component.

LEGO is recursive at every scale. **The application or system itself is the outermost LEGO.** Its externally supported inputs, outputs, commands, events, data contracts, and lifecycle surfaces are its public **studs/surfaces**. Large application sections, subsystems, services, components, and large objects should preferably be compositions of smaller internal LEGOs rather than monolithic implementations. Each parent brick owns its externally visible responsibility and hides child topology; connection to a parent, sibling, dependency, or consumer occurs only through deliberate studs/surfaces, never by drilling through internals.

A LEGO must fit inside one agent's **full-attention envelope**. An agent working on the brick should be able to load and actively reason about its complete authoritative working set at once: public contract, implementation, invariants, lifecycle/resource rules, tests/conformance, and the immediate dependency and consumer interfaces needed to understand consequences. Merely fitting inside a model's maximum context window is not sufficient.

Treat context fit as a real boundary criterion:

- If one supposed brick requires an agent to spread attention across too many independently meaningful state machines, lifecycles, resources, failure domains, dependency sets, or reasons to change, split it at the strongest real seam.
- Prefer seams based on semantic ownership, lifecycle, resource/failure containment, substitution, volatility, execution locality, or another independently testable responsibility. Context pressure helps decide **where a real boundary is needed**; it does not justify arbitrary file splitting.
- LEGO composition is recursive. A parent may own one externally visible responsibility while smaller internal LEGOs own bounded sub-responsibilities. Private children remain encapsulated behind the parent unless they become legitimate public components in their own right.
- For very large objects or application sections, recursive child LEGOs are preferred when they preserve cohesion while bringing each reasoning unit back inside full attention.
- Treat studs/surfaces as real contracts. They define what may enter or leave a brick; they must not expose private child topology, mutable internals, or foreign implementation details merely for convenience.
- Do not split a genuinely indivisible invariant merely to reduce line count. A split is bad when it creates duplicated truth, constant cross-boundary chatter, shared mutable state, or requires neighboring bricks to understand each other's internals.
- Prefer the smallest coherent, independently comprehensible and replaceable unit, not the smallest possible module.
- Repository structure and component documentation should let an entering agent identify quickly: what the brick owns, what it does not own, what enters and leaves, which invariants cannot be violated, what can replace it, what failures/resources it contains, and how to prove it still works.

Use the design hierarchy in order:

```text
LEGO: choose and contain the architectural boundary
  -> SOLID: structure responsibilities and dependencies inside the brick
    -> CUPID: make that implementation composable, predictable, idiomatic, and domain-shaped
      -> KISS: remove remaining unjustified complexity
```

A lower-level principle may not defeat a higher-level one. A locally simple implementation is not KISS if it breaks LEGO encapsulation; locally elegant CUPID code is not valid if it violates SOLID dependency direction; a SOLID component is still wrong if its responsibility belongs in another LEGO.

When a repository has a local `AGENTS.md` or design-principles authority, carry this rule into that mandatory local startup path rather than assuming agents will discover this account-level file.

## Adaptive problem-solving cycle

Use an evidence-driven process whose rigor expands or contracts with the problem. Do not assume that the initial problem statement contains everything that matters: **you cannot know what you do not know.** Initial assessment is provisional; research is how the working model is exposed to facts outside its current frame.

For every complex problem or large-scope problem, research is mandatory before a final implementation plan. Complexity increases research depth; scope increases research breadth. Research includes the actual protected repository state and governing specifications as well as, where relevant, history, upstream/vendor documentation, standards, literature, known failure modes, analogous implementations, consumers, dependencies, and external evidence. Research must look for facts that could invalidate or expand the initial framing, not merely confirm the first hypothesis.

Use this discovery loop in order:

```text
ASSESS
  -> RESEARCH
    -> REASSESS
      -> repeat when scope materially grows or confidence remains low
```

Assessment records the apparent problem, ownership, scope, complexity, consequence of being wrong, known unknowns, and current confidence. Reassessment explicitly asks what the research changed: whether the problem, owner, scope, complexity, consequence, dependencies, assumptions, or unknowns changed. If research materially expands the problem, assess and research the expanded problem before proceeding. Continue until scope is stable enough and confidence is high enough to choose the next tool.

Low confidence after the first reassessment does **not** immediately authorize a prototype. First perform another research pass that is deliberately deeper, broader, or more targeted at the unresolved uncertainty, then reassess again. If that additional research materially improves confidence, continue research/reassessment while the information gain remains worthwhile. If confidence remains materially low after the additional pass and further research is no longer reducing the important uncertainty efficiently, treat research as saturated and escalate to a rapid prototype so reality can answer the remaining question.

### Recursive decomposition and the fast path

Before applying more process to a large or complex problem, try to make the problem smaller. The discovery cycle is recursive: assess and research enough of the current problem to expose its real topology, then decompose it along genuine ownership, contract, lifecycle, resource/failure, execution, or dependency seams when doing so creates independently comprehensible work units.

Reclassify every child problem independently:

- **Simple + small + understood:** use the normal fast path: make the bounded change, verify it, and finish. Do not require a formal research pass, reassessment report, prototype, or implementation plan merely because the parent problem was difficult.
- **Complex, large, or materially uncertain:** apply the same assess -> research -> reassess cycle recursively to that child.
- Stop recursing when the current unit is the smallest coherent unit that is simple enough, small enough, and understood enough for a competent agent to solve directly with high confidence. The target is the **fast-path threshold**, not an arbitrary file/function/task size.

A valid decomposition reduces reasoning burden without destroying cohesion. Do not call a split successful when children still require constant knowledge of one another, duplicate authoritative state, share mutable ownership, or divide an indivisible transition. If decomposition cannot localize the work because boundaries are entangled, treat that as evidence about the architecture rather than distributing the same confusion across more tasks.

The result may be a dependency **web**, not a neat tree. Record enough structure to know what each child owns, what it depends on, what evidence it produces or consumes, which branches can proceed independently, and where results must converge. Complexity and scope should become localized as recursion proceeds; most leaves should return to the fast path while only the irreducibly difficult leaves retain the heavier process.

The parent problem retains integration responsibility. After child work completes, recompose the results and evidence upward: verify dependency edges, interface agreement, integration behavior, completeness, and the original parent acceptance condition. Individually correct leaves do not prove that the parent problem is solved.

Then apply a three-state confidence gate to any remaining non-fast-path unit:

- **Sufficient confidence:** write the final implementation plan at the level of detail actually supported by evidence.
- **Low confidence, research still productive:** deepen, broaden, or redirect research around the unresolved uncertainty, then reassess. Do not prototype merely because the first research pass was insufficient.
- **Persistently low confidence after additional research / research saturated:** build the smallest quick-and-dirty rapid prototype that crosses enough of the real path to expose the hidden constraint or interaction. The prototype is reconnaissance, not production architecture. Minimize polish and speculative abstraction; use real interfaces where composition is what must be learned. Record the question it is intended to answer, its deliberate shortcuts, and which conclusions are trustworthy.
- After a prototype, observe reality, research the newly exposed questions, reassess scope and confidence, and repeat as needed. A prototype that proves the original framing wrong is successful reconnaissance.

A final plan is authoritative only while its assumptions remain supported. During execution, a material surprise, hidden dependency, ownership conflict, lifecycle/resource mismatch, unexpected platform behavior, or other fact that invalidates dependent assumptions sends the work back to reassessment and research; prototype again when the new uncertainty remains materially unresolved after research. Do not patch around a newly discovered fact merely to preserve the old plan.

For problems whose **source is unknown**, switch from construction to diagnosis:

1. Scope the failure until the smallest useful suspect region is isolated; prove good boundaries and remove them from active suspicion.
2. Instrument the suspect region aggressively with temporary checkpoints at meaningful semantic transitions, comparing expected and actual inputs, identities, state, ownership, resources, generations, transitions, outputs, and cleanup behavior as relevant.
3. Use the next run to locate the **first divergence from expected reality**, then narrow again. Prefer checkpoints that answer a hypothesis over blind line-by-line logging.
4. After the cause is proven, remove temporary diagnostic noise or retain only the smallest durable invariant/check that is worth its continuing cost.

Testing should maximize trustworthy information per expensive run. **Fail fast on invalid prerequisites; otherwise collect broadly across independent valid cases.** One failure should stop only tests whose evidence has become invalid because they depend on that failed prerequisite or corrupted state. Independent siblings should continue so a run can surface multiple actionable inconsistencies rather than paying setup/compile/hardware/CI cost repeatedly to discover them one at a time. Report all collected failures clearly enough to distinguish likely common-root failures from independent defects.

Qualification can combine focused tests, contract/conformance tests, integration tests, independent numerical or behavioral oracles, invariants/properties, adversarial cases, compatibility matrices, and measured evidence as the problem requires. Consequence controls the strength of evidence, review, rollback/recovery planning, and independent qualification; it does not make an otherwise simple problem intellectually complex.

### Engineering record

Documentation is a continuous output of the cycle, not an afterthought. Preserve the durable engineering rationale needed for another competent agent to understand and continue the work without repeating expensive discovery. Record, at the appropriate project-owned location:

- the problem as initially observed and any materially revised problem statement;
- assessment and reassessment conclusions, including scope/ownership changes and important assumptions;
- research findings with enough provenance to recover the evidence, especially findings that changed the problem or design;
- engineering rationale: relevant hypotheses, alternatives, tradeoffs, rejected approaches, and the evidence that selected or rejected them; do not preserve a verbatim private reasoning transcript;
- the final plan and material plan revisions;
- prototype questions, deliberate shortcuts, observations, trustworthy conclusions, and explicit non-production aspects;
- material discoveries during execution that changed assumptions or architecture;
- qualification evidence, failures encountered, root causes, remaining limitations, and deferred/unproven claims;
- rejected alternatives when forgetting the rejection would make a future agent likely to repeat the same costly path.

Do not turn the record into a diary. Preserve a fact when losing it would materially increase the chance that a future engineer misunderstands the system, repeats expensive research, chooses a disproven design, violates a constraint, or misreads the evidence supporting the current architecture.

The final **cleanup/document** stage reconciles the durable record with the implementation that actually survived qualification and review. Remove prototypes, temporary checkpoints, dumps, duplicated reference code, one-off fixtures/scripts, and other reconnaissance scaffolding unless they have earned a permanent role. Convert discovered failures into regression/conformance evidence where useful. Update governing contracts/specifications and current-state documentation when the work changed them. Ensure issues, PRs, handoffs, plans, and architecture prose do not claim more than protected state and qualified evidence support.

The governing shape is therefore:

```text
ASSESS
  -> RESEARCH
    -> REASSESS
      -> if scope grew: reassess/research the expanded problem
      -> if confidence is low: DEEPER / BROADER / TARGETED RESEARCH
         -> REASSESS AGAIN
            -> if research is still increasing confidence: continue research/reassessment
            -> if confidence remains materially low and research is saturated: RAPID PROTOTYPE
               -> OBSERVE -> RESEARCH newly exposed questions -> REASSESS
      -> DECOMPOSE at real seams when useful
         -> RECLASSIFY each child
            -> FAST PATH for simple + small + understood leaves
            -> RECURSE from ASSESS for complex / large / uncertain leaves
         -> INTEGRATE and QUALIFY the parent objective
      -> for any remaining irreducible non-fast-path unit with sufficient confidence: FINAL PLAN
      -> EXECUTE
         -> material surprises loop back to REASSESS / RESEARCH
      -> QUALIFY / TEST
      -> REVIEW
      -> CLEANUP / DOCUMENT
```

**Simple, small, well-understood work takes the fast path.** It should normally go directly to the bounded change and focused verification; do not manufacture research, planning, prototypes, or process artifacts for routine work. The extended cycle exists for complex, large-scope, or materially uncertain problems, and its purpose is often to recurse until most of that work has become a web of simple fast-path problems.

When a repository has a local `AGENTS.md`, alignment card, read-first specification, or other mandatory agent startup authority, carry a compact form of this adaptive cycle into that mandatory local path rather than assuming agents will discover this account-level file.

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

## AI-assisted development accountability

AI assistance is permitted and may be substantial, but it never lowers the evidence or ownership bar.

- Treat model-generated code, prose, analysis, and model-to-model review as untrusted working material, not authority, an independent oracle, review evidence, or proof of correctness.
- The submitting contributor or maintainer remains accountable for understanding the change and for every implementation, security, compatibility, test, provenance, and qualification claim attached to it.
- Apply the same repository-required review, tests, exact-head evidence, provenance, and cleanup gates regardless of whether a change was handwritten, AI-assisted, or largely agent-produced.
- Keep public disclosure brief and factual. Do not create defensive documents explaining why AI use is acceptable or documentation about trying not to look AI-generated.
- Routine AI assistance does not require a prompt log or tool inventory. Disclose material AI assistance when it affects provenance, licensing, security review, reproducibility, or another repository-specific requirement.

## Validation

Run before completion:

```powershell
node tools/verify-community.mjs
git diff --check
```

Inspect the full diff, commit coherent work with a Developer Certificate of Origin sign-off, use a pull request, and merge only the exact reviewed head after required checks pass.
