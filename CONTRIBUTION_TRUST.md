# Contribution Trust Policy

This policy applies across `iteathen` repositories unless the repository owner explicitly changes it for a specific task.

## Integration authority

Only changes produced by `iteathen` or by an agent explicitly authorized by the repository owner are eligible to become repository implementation, documentation, governance, qualification, or evidence authority.

External people, accounts, bots, automated dependency services, and unsolicited agents are untrusted contribution sources. Their pull requests, commits, patches, suggestions, generated files, reviews, comments, attestations, and evidence must not be merged, cherry-picked, copied into the repository, or relied on as qualification authority.

A Git author, committer, display name, signature, branch name, or commit message claiming `iteathen` or an agent identity is not sufficient by itself. Trust requires owner-controlled provenance: the work must originate from an owner-controlled path or from an explicitly authorized agent task, and material integration must survive the repository's normal protected-state, exact-head, review, and qualification checks.

## External information

This rule does not prohibit research. Public specifications, upstream source repositories, vendor documentation, standards, security advisories, papers, issue reports, or other external material may be examined as evidence according to their normal authority and provenance.

If an external contribution reveals a useful idea, bug, dependency update, or repair, treat it only as a lead. Reassess the need from authoritative sources, then independently reconstruct any accepted change on an `iteathen`/authorized-agent-controlled branch and qualify that reconstruction as new work. Do not preserve the external contribution as the implementation or evidence source.

## Automation

Dependency bots and other automation may report that an update exists, but their proposed repository mutations are not trusted input. Resolve the authoritative upstream release/source independently, reproduce the required change through an owner/authorized-agent path, and run the applicable repository qualification.

GitHub platform machinery such as `web-flow` appearing as the committer of an owner-authorized protected merge is transport metadata, not a separate contribution source. The relevant trust question is who controlled and authorized the content being integrated.

## Incident posture

When contribution provenance is ambiguous, unexpected, or inconsistent with the trusted source set, stop affected integration, preserve evidence, and fail closed until provenance is established. Do not repair a provenance uncertainty by relabeling, rebasing, or copying the suspect content into a trusted-looking commit.
