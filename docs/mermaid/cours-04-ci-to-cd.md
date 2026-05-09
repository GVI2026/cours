flowchart TB
    A[Commit sur main] --> B[CI<br/>format-lint, tests, E2E, build]
    B --> C[Artefact versionne]
    C --> D[Publication dans le registre]
    D --> E[Deploiement STAGING]
    E --> F{Validation finale}
    F -->|humaine| G[Continuous Delivery]
    F -->|automatique| H[Continuous Deployment]
    G --> I[Deploiement PROD]
    H --> I
