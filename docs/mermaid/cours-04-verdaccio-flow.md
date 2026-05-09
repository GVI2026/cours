flowchart TB
    A[Job build] --> B[npm pack]
    B --> C[Verdaccio<br/>registre npm prive]
    C --> D[Serveur de deploiement]
