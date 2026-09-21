# Evidence and validation policy

This policy defines how iteathen public repositories describe claims, qualification, verification, measurement, and external validation.

## Governing invariant

**No evidence may be described more strongly than the independence and authority of its oracle permit.**

Evidence work may observe, test, benchmark, falsify, qualify, measure, and document an operational system. It MUST NOT change the operational implementation in order to make the evidence pass. Solver logic, runtime logic, production APIs, hot paths, protocol semantics, and other substantive operational behavior remain outside an evidence-only change unless a separate implementation change is explicitly authorized.

## Evidence classes

Use the narrowest class that actually applies.

- **UNVALIDATED** — proposal, design claim, hypothesis, intended behavior, or assertion without qualifying evidence.
- **INTERNAL-QUALIFICATION** — deterministic tests, fixtures, cold/isolated model runs, repository-controlled scorers, internal cross-checks, or other evidence whose oracle and execution remain under project control.
- **REFERENCE-GROUNDED** — checked against an independently specified public reference, solved corpus, normative external standard, or independently maintained reference implementation.
- **FORMALLY-CHECKED** — discharged by a named mechanical proof/checking system with the proof object, checker, version, assumptions, and reproducible command preserved.
- **HARDWARE-MEASURED** — observed on identified physical hardware with exact revision, environment, command, raw result, and measurement conditions preserved.
- **EXTERNALLY-REPRODUCED** — reproduced by a genuinely independent third party or independently controlled system not authored or directed as part of the project evidence campaign.

These classes may be combined when all stated obligations are actually met. Higher-looking labels do not erase limitations of lower-level evidence.

## Independence

A fresh model context, different model, different provider, blind packet, hidden fixture, or isolated verifier can improve **execution independence** and reduce contamination. It does not by itself create independent external authority.

Use terms such as **isolated verifier**, **cold verifier**, or **independent execution** when that is what occurred. Reserve **external validation**, **independent external validation**, and **externally reproduced** for evidence whose authority is actually external to the project-controlled campaign.

AI-generated code, prose, analysis, scoring, and model-to-model review may be useful working or qualification evidence. They are not automatically an independent oracle, formal proof, or external validation.

## Disposition language

`PASS`, `FAIL`, `PARTIAL`, `QUALIFIES`, `VERIFIED`, and similar dispositions are always scoped to the named test, oracle, revision, and evidence class.

A bare internal `PASS` means only that the artifact passed that internal qualification. It MUST NOT be presented as external validation.

Historical dispositions are immutable records of what the frozen campaign concluded. Later discovery of a fixture, scorer, or interpretation defect does not rewrite the old result; it creates a new review/campaign with explicit provenance.

## Claim records

A material claim should identify, directly or through an evidence registry:

- claim identifier;
- exact claim and scope;
- current evidence class;
- oracle/reference;
- revision or artifact under test;
- falsifier or rejection condition;
- evidence/results location;
- known limitations;
- whether external reproduction exists.

README prose may summarize a claim, but strong validation language should link to the evidence record that supports it.

## External validation

External validation is strongest when a skeptical reader can reproduce or falsify the claim without accepting project-specific terminology first.

Preferred examples include:

- solved/reference corpora and independent reference solvers;
- public standards and normative test vectors;
- reproducible hardware measurements with raw logs;
- independently maintained reference implementations;
- proof artifacts checked by a named mechanical checker;
- third-party reproduction.

Internal qualification remains valuable. The requirement is accurate labeling, not devaluation.

## Project evidence entry point

Each substantive public repository SHOULD provide an `EVIDENCE.md` entry point that states:

1. what evidence currently exists;
2. its evidence class;
3. what it establishes;
4. what it does not establish;
5. the path to stronger external validation.

Repository-specific authority remains controlling for project semantics. This policy controls only the strength and labeling of evidence claims.
