# Shared community guidance

This repository maintains default contribution, security, support, conduct, issue, and pull-request guidance for public projects owned by [iteathen](https://github.com/iteathen).

GitHub uses applicable community defaults when a project does not supply its own file. The aim is consistent, project-neutral guidance as the portfolio develops.

## Global agent instructions

`AGENTS.md` is the single versioned universal engineering authority for the account. Repository-specific agent context belongs in each repository's thin `AGENT_LOCAL.md`.

For Codex, the runtime-global instruction location is `$CODEX_HOME/AGENTS.md`. The cleanest setup is to use a checkout of this repository as `CODEX_HOME`; the included `config.toml` declares `AGENT_LOCAL.md` as a project-document fallback so Codex loads the active repository's local context automatically.

If an environment uses a different `CODEX_HOME`, point or synchronize its global `AGENTS.md` and `config.toml` to these canonical files rather than copying the universal doctrine into individual repositories.

- [Universal agent authority](AGENTS.md).
- [This repository's local agent context](AGENT_LOCAL.md).
- [Project directory](profile/README.md).
- [Contributing](CONTRIBUTING.md), [support](SUPPORT.md), and [code of conduct](CODE_OF_CONDUCT.md).
- [Security reporting](SECURITY.md) and [governance](GOVERNANCE.md).
- [MIT license](LICENSE).
