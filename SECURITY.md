# Security policy

## Supported versions

Support status belongs to each affected repository. Unless that repository says otherwise, only its current default branch and latest published release are candidates for security fixes; prerelease projects may have no supported production version.

## Report privately

Do not disclose a suspected vulnerability in a public issue, discussion, commit, or pull request.

1. Open the affected repository on GitHub.
2. Select **Security** and then **Report a vulnerability**.
3. Identify the exact affected revision, package, workflow, contract, or artifact.
4. Provide reproduction conditions, expected impact, the smallest safe proof of concept, and known mitigations.

If the button is unavailable, use GitHub's private contact path to the repository owner rather than publishing exploit details. Do not include live credentials, third-party personal data, or destructive payloads.

Maintainers will validate ownership and severity, coordinate remediation, and agree on disclosure timing with the reporter. A dependency-owned defect should be reported privately to that dependency's owner as well.

## Shared expectations

- Secrets and private runtime artifacts never belong in source, issues, logs, fixtures, or diagnostics.
- Dependencies and automation use least privilege, explicit identity, and versioned public contracts.
- GitHub Actions should be pinned to immutable full commits.
- Failure, cancellation, partial validity, pressure, recovery, and cleanup are security-relevant behavior.
