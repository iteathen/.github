# GPU-native open-source systems

This account develops composable GPU infrastructure and chess-engine systems with explicit ownership, replaceable public contracts, bounded lifecycles, and evidence-based support claims.

## Projects

| Project | Purpose | Current maturity |
|---|---|---|
| [CUDA-JS](https://github.com/iteathen/CUDA-JS) | No-addon ESM runtime and toolchain for NVIDIA CUDA from Node.js | Public prerelease implementation |
| [CUDA-JS-Tensor](https://github.com/iteathen/CUDA-JS-Tensor) | Consumer-neutral tensor planning and accelerated execution over CUDA-JS | Specification-first prerelease |
| [CUDA-MCGS](https://github.com/iteathen/CUDA-MCGS) | Universal GPU-resident Monte Carlo Graph Search framework | Documentation-first prerelease |
| [UCI Arena Vector](https://github.com/iteathen/UCI-Arena-Vector) | GPU-resident MCGS chess engine with a standard UCI interface | Specification and connector planning |
| [DevBridge](https://github.com/iteathen/DevBridge) | Security-focused control plane for reproducible repository work in isolated environments | Active development |

```text
UCI Arena Vector
      |
      v
  CUDA-MCGS ------> CUDA-JS-Tensor
      |                    |
      +------> CUDA-JS <---+

DevBridge provides independent development automation;
it is not part of the runtime dependency graph.
```

Each project is an independent LEGO product. Generic CUDA runtime, tensor, graph-search, chess-engine, and development-control responsibilities stay with their owning repositories instead of leaking into the first consumer.

## Contribute

Start with a repository's README, status, agent/developer guidance, and open issues. Contract review, deterministic fixtures, platform qualification, documentation, and bounded failure/lifecycle cases are valuable contributions even before a production API is stable.

- Browse account-wide [`help wanted` issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+owner%3Aiteathen+label%3A%22help+wanted%22).
- Read the shared [contribution guide](https://github.com/iteathen/.github/blob/main/CONTRIBUTING.md) when a repository has no more-specific guide.
- Use each repository's Discussions area for questions and early design exploration.
- Report vulnerabilities privately through the affected repository's Security tab.

Support and compatibility claims are always scoped to exact published revisions and evidence; prerelease status is not a promise of production readiness.
