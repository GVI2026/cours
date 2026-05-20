flowchart LR
    A[Zone de travail<br/>fichiers modifies] --> B[git status<br/>etat observe]
    B --> C[git add<br/>changements selectionnes]
    C --> D[Index<br/>prochain commit prepare]
    D --> E[git commit<br/>instantane cree]
    E --> F[Historique de commits]
    D --> G[git restore --staged<br/>retrait de l'index]
    G --> A