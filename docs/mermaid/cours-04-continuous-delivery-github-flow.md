flowchart TB
    A[Branche feature courte] --> B[Pull Request]
    B --> C[CI<br/>format, lint, tests, build, security]
    C --> D{CI verte ?}
    D -->|non| B
    D -->|oui| E[Rebase sur main<br/>integration fast-forward]
    E --> F[Release<br/>SemVer + tag]
    F --> G[Build once]
    G --> H[Package npm]
    G --> I[Image OCI]
    H --> J[Verdaccio]
    I --> K[registry:2]
    J --> L[Artefacts prets a deployer]
    K --> L
    L --> M[Decision humaine de deploiement]
