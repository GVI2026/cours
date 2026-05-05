flowchart TD
    COMMIT["commit pushé"] --> CI

    subgraph CI["Intégration Continue — CI"]
        direction TB
        C1["Build automatique"] --> C2["Tests automatiques"] --> C3["✅ Artefact validé"]
    end

    CI --> CD_DEL
    CI --> CD_DEP

    subgraph CD_DEL["Continuous Delivery"]
        direction TB
        D1["Artefact prêt\npour la prod"] --> D2["🖐 Déploiement\nmanuel déclenché"]
    end

    subgraph CD_DEP["Continuous Deployment"]
        direction TB
        E1["Artefact prêt\npour la prod"] --> E2["🤖 Déploiement\nautomatique en prod"]
    end

    style CI fill:#dbeafe,stroke:#3b82f6
    style CD_DEL fill:#dcfce7,stroke:#22c55e
    style CD_DEP fill:#fef9c3,stroke:#eab308
