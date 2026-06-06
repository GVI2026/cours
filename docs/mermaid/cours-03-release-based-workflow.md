gitGraph
    commit id: "v1.0-baseline"
    branch release/v1.0
    
    checkout main
    commit id: "init-dev-v2"
    
    branch feature/add-task-stats
    commit id: "GET /tasks/stats"
    
    checkout main
    merge feature/add-task-stats id: "integration-v2-stats"
    commit id: "suite-produit-v2"
    
    # On crée la release V2 APRES les développements
    branch release/v2.0
    
    # Gestion du Hotfix selon les bonnes pratiques (Upstream-First)
    checkout main
    branch hotfix/fix-title
    commit id: "fix-titre-vide"
    
    # On applique le fix sur Main en premier
    checkout main
    merge hotfix/fix-title id: "fix-merged-to-main"
    
    # On propage le fix proprement sur les releases actives
    checkout release/v2.0
    cherry-pick id: "fix-titre-vide"
    
    checkout release/v1.0
    cherry-pick id: "fix-titre-vide"
    commit id: "tag-v1.0.1"
