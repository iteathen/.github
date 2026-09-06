# iteathen open-source projects

These projects develop JavaScript GPU libraries, search software, and development automation. They are at different stages; each project's README and status document describe what is available.

## Libraries and applications under development

| Project | Purpose | Current availability |
| --- | --- | --- |
| [CUDA-JS](https://github.com/iteathen/CUDA-JS) | Node.js CUDA runtime and compiler toolchain | Public alpha implementation; unpublished npm package; native evidence limited to recorded profiles |
| [CUDA-JS-Tensor](https://github.com/iteathen/CUDA-JS-Tensor) | Tensor planning and GPU execution | Prerelease implementation; unpublished package; qualification limited to exact recorded pairs |
| [CUDA-MCGS](https://github.com/iteathen/CUDA-MCGS) | Reusable GPU-resident Monte Carlo Graph Search | Development library and reference/conformance code; no released or physically qualified GPU search runtime |
| [UCI Arena Vector](https://github.com/iteathen/UCI-Arena-Vector) | GPU-resident UCI chess engine | Contracts and model/integration preparation; no runnable engine |
| [DevBridge](https://github.com/iteathen/DevBridge) | Remote development under local operator control | Public alpha with VM execution paths; real-provider qualification incomplete; no production security claim |

## Planned libraries

These repositories currently contain architecture and planning material. They do not yet offer production implementations or public APIs.

| Project | Intended scope |
| --- | --- |
| [CUDA-NN](https://github.com/iteathen/cuda-nn) | Reusable neural-network layers and inference, subject to consumer justification |
| [CUDA-RNG](https://github.com/iteathen/cuda-rng) | Random generation, distributions, and reproducibility |
| [CUDA-COMM](https://github.com/iteathen/cuda-comm) | GPU collectives, point-to-point communication, and remote memory |
| [CUDA-IO](https://github.com/iteathen/cuda-io) | GPU data sources, sinks, and storage transfers |
| [CUDA-MEDIA](https://github.com/iteathen/cuda-media) | Image processing and video pipelines |
| [CUDA-DATA](https://github.com/iteathen/cuda-data) | Columnar data and relational operations |
| [CUDA-RAY](https://github.com/iteathen/cuda-ray) | Ray, geometry, and traversal queries |
| [CUDA-GRAPH-ANALYTICS](https://github.com/iteathen/cuda-graph-analytics) | Graph representation and analysis |

The GPU projects aim to compose through public library contracts, with application behavior kept in its owning project. DevBridge is independent development tooling.

## Participate

Start with the relevant repository's README and contribution guide. Where a project has no local guide, use the [shared contribution guide](https://github.com/iteathen/.github/blob/main/CONTRIBUTING.md).

For help, consult the [support policy](https://github.com/iteathen/.github/blob/main/SUPPORT.md). Report vulnerabilities privately according to the [security policy](https://github.com/iteathen/.github/blob/main/SECURITY.md).
