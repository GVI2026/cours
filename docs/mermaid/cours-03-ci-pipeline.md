flowchart LR
    A[push / pull_request] --> B[install]
    B --> C[format-lint]
    C --> D[tests]
    D --> E[build]
    E --> F[security]
    C -. fail-fast .-> X["Stop"]
    D -. fail-fast .-> X
    E -. fail-fast .-> X
    classDef stopStyle fill:#ef4444,stroke:#dc2626,color:#ffffff,font-weight:bold
    class X stopStyle