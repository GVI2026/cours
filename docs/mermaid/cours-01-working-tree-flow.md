flowchart LR
    A[Working tree<br/>je modifie un fichier] --> B[git status<br/>j'observe l'etat]
    B --> C[git add<br/>je prepare le prochain commit]
    C --> D[Index / staging area]
    D --> E[git commit<br/>je cree un instantane]
    E --> F[Historique Git]
    D --> G[git restore --staged<br/>je retire un fichier de l'index]