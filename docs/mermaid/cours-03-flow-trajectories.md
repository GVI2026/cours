flowchart TD
    A[Demarrage sans flow reel] --> B[GitHub Flow]
    B -.->|rester simple| C[GitHub Flow adapte\nrelease choisie par l'equipe\nex: release-please]
    B --> D[Git Flow\nlivraison manuelle ou communautaire\nbarrieres humaines fortes]
    B --> E[GitLab Flow\nservice Cloud/Web critique\npassage par staging]
    B --> F[Release-Based Workflow\nlivrables distincts\naudits et versions paralleles]
    B --> G[Trunk-Based Development\nhaute maturite CI/CD\nfin des branches longues]
