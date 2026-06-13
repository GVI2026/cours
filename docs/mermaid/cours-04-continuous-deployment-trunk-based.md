flowchart TB
    A[Petit changement] --> B[Merge frequent sur main]
    B --> C[CI complete]
    C --> D[Publication artefact]
    D --> E[Deploiement automatique]
    E --> F[Smoke test]
    F --> G{OK ?}
    G -->|oui| H[Production stable]
    G -->|non| I[Rollback automatique]
    B --> J[Feature flag OFF]
    J --> K[Activation progressive]
