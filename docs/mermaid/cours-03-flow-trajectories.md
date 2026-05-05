flowchart TD
    A[Demarrage sans flow reel] --> B[GitHub Flow]
    B -.->|contexte type| G[Equipe petite\nune ligne courante claire]
    B --> C[GitLab Flow]
    C -.->|concretement| H[Versions actives en parallele\nbranches liees aux environnements\nex: main -> STAGING\nproduction/v1 -> PROD]
    C --> D{Evolution du contexte}
    D -->|Plusieurs versions supportees| E[GitLab Flow conserve]
    D -->|Integrations tres frequentes| F[Trunk-Based Development]
    I[Prerequis: CI/CD mature\nfeature flags + merge queue] --> F