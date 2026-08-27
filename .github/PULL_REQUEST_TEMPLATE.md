## Owning issue

Closes #

## Outcome

Describe the public-facing result and its authoritative owner.

## Boundary and risk

- [ ] Project-specific policy remains in its owning repository.
- [ ] Shared guidance stays valid for every repository that may inherit it.
- [ ] No credentials, private artifacts, personal data, or machine-specific state are included.
- [ ] Automation uses least privilege and immutable full-commit action pins.

## Evidence

- [ ] `node tools/verify-community.mjs`
- [ ] `git diff --check`
- [ ] Links and rendered Markdown were inspected.

List checks not run and any compatibility or rollout risk.

## Certification

- [ ] Commits include a Developer Certificate of Origin `Signed-off-by` line.
