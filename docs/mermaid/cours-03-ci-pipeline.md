flowchart LR
    A[push / pull_request] --> B[install]
    B --> C[format-lint]
    C --> D[tests]
    D --> E[build]
    E --> F[security]
    C -. fail-fast .-> X[stop]
    D -. fail-fast .-> X
    E -. fail-fast .-> X