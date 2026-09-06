# GPU-native open-source systems

This account develops composable GPU infrastructure, reusable GPU semantic libraries, chess-engine systems, and development-control tooling with explicit ownership, replaceable public contracts, bounded lifecycles, and evidence-based support claims.

## Core runtime and consumer projects

| Project | Purpose | Current maturity |
|---|---|---|
| [CUDA-JS](https://github.com/iteathen/CUDA-JS) | Capability-safe Node.js runtime/toolchain for bounded NVIDIA CUDA Driver, compiler and selected library mechanisms | Public prerelease implementation; unpublished; no production support claim |
| [CUDA-JS-Tensor](https://github.com/iteathen/CUDA-JS-Tensor) | Consumer-neutral Tensor semantics, planning and execution over public CUDA-JS contracts | Public prerelease implementation; current real-model lane is implementing accepted f32/f64 `unary:tanh` |
| [CUDA-MCGS](https://github.com/iteathen/CUDA-MCGS) | Universal GPU-resident Monte Carlo Graph Search framework | Public prerelease implementation with a private development package/public-library boundary; physical CUDA runtime qualification still open |
| [UCI Arena Vector](https://github.com/iteathen/UCI-Arena-Vector) | Independent GPU-resident MCGS chess-engine product with a standard UCI interface | First-real-model public-library coverage and connector preparation; no released engine/runtime |
| [DevBridge](https://github.com/iteathen/DevBridge) | Security-focused control plane for reproducible repository work in isolated execution environments | Active public alpha implementation; no signed production release or production security claim |

## Independent reusable semantic owners

These repositories define natural ownership boundaries before implementation breadth is authorized. Repository existence is not a production-capability claim.

| Project | Semantic responsibility | Current maturity |
|---|---|---|
| [cuda-nn](https://github.com/iteathen/cuda-nn) | Reusable neural-network/model/layer/inference semantics above generic Tensor operations | Architecture/governance integrated; production inference gated on consumer-backed issue #2 |
| [cuda-rng](https://github.com/iteathen/cuda-rng) | Provider-neutral random generator, distribution, seed/split and reproducibility semantics | Architecture/governance owner only; no production API/package/provider support |
| [cuda-comm](https://github.com/iteathen/cuda-comm) | Provider-neutral group/rank, collective, P2P, PGAS and RMA communication semantics | Architecture/governance owner only; no production API/provider/topology support |
| [cuda-io](https://github.com/iteathen/cuda-io) | GPU source/sink, transfer and direct-storage semantics | Architecture/governance owner only; first implementation remains consumer/contract gated |
| [cuda-media](https://github.com/iteathen/cuda-media) | Reusable image-processing and video-codec semantics | Architecture/governance owner only; image and video lanes remain independently activatable |
| [cuda-data](https://github.com/iteathen/cuda-data) | Reusable columnar/table/relational GPU semantics | Architecture/governance owner only; no cuDF/libcudf provider selected |
| [cuda-ray](https://github.com/iteathen/cuda-ray) | Reusable ray, geometry, acceleration-structure and traversal semantics | Architecture/governance owner only; no native/OptiX support claim |
| [cuda-graph-analytics](https://github.com/iteathen/cuda-graph-analytics) | Reusable graph representation and graph-analytics semantics distinct from graph search | Architecture/governance owner only; no production API/provider support |

## Ownership shape

```text
UCI Arena Vector
      |
      +------> CUDA-MCGS ------> CUDA-JS
      |              |
      |              +---- optional evaluator connector ----+
      |                                                |
      +------------------> CUDA-JS-Tensor ------------+
                               |
                               v
                            CUDA-JS

cuda-nn (only if consumer-justified)
      |
      +------> CUDA-JS-Tensor ------> CUDA-JS
      +------> cuda-rng   (optional semantic dependency)
      +------> cuda-comm  (optional semantic dependency)

cuda-io / cuda-media / cuda-data / cuda-ray / cuda-graph-analytics
remain independent semantic owners and consume lower public mechanisms only when
consumer-backed accepted profiles justify implementation.

DevBridge provides independent development automation;
it is not part of the runtime dependency graph.
```

Each repository is an independent LEGO product/semantic owner. Generic CUDA runtime, Tensor, RNG, communication, I/O, media, data, ray/geometry, graph-analytics, graph-search, neural-network, chess-product, and development-control responsibilities stay with their natural owners instead of leaking into the first consumer.

## Current claim boundary

The portfolio contains substantial public prerelease implementation in CUDA-JS, CUDA-JS-Tensor, CUDA-MCGS and DevBridge, plus active first-consumer/product work in UCI Arena Vector. The newer semantic-owner repositories are intentionally governance-first and do not claim production implementations merely because their ownership boundaries exist.

Portable, mock, hosted-CI, specification or governance evidence is never relabeled as physical/native/provider qualification. CUDA-JS native Linux and the CUDA-MCGS/CUDA-JS physical compatible-pair cells still require their exact accepted physical evidence.

## Contribute

Start with a repository's README, `STATUS.md`/current-state document, agent/developer guidance, and open issues. Contract review, deterministic fixtures, platform qualification, documentation, and bounded failure/lifecycle cases are valuable contributions even before a production API is stable.

- Browse account-wide [`help wanted` issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+owner%3Aiteathen+label%3A%22help+wanted%22).
- Read the shared [contribution guide](https://github.com/iteathen/.github/blob/main/CONTRIBUTING.md) when a repository has no more-specific guide.
- Use each repository's Discussions area for questions and early design exploration where enabled.
- Report vulnerabilities privately through the affected repository's Security tab.

Support and compatibility claims are always scoped to exact published or reviewed revisions and the evidence actually recorded; prerelease status is not a promise of production readiness.
