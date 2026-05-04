flowchart TD
    A[Demarrage sans flow reel] --> B[GitHub Flow]
    B --> C[GitLab Flow]
    C --> D{Contexte produit}
    D -->|Plusieurs versions a maintenir| E[GitLab Flow conserve]
    D -->|Integrations tres frequentes| F[Trunk-Based Development]
    B --> G[Equipe petite, une ligne courante claire]
    C --> H[Versions actives en parallele]
    F --> I[CI/CD mature + feature flags + merge queue]