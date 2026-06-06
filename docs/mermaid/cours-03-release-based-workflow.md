gitGraph
    commit id: "base produit"
    branch release/v1.0
    checkout main
    commit id: "integration v2"
    branch feature/add-task-stats
    commit id: "GET /tasks/stats"
    checkout main
    merge feature/add-task-stats
    branch release/v2.0
    checkout main
    commit id: "suite produit"
    checkout release/v1.0
    branch hotfix/fix-title-validation
    commit id: "titre vide rejete"
    checkout release/v1.0
    merge hotfix/fix-title-validation
    checkout release/v2.0
    cherry-pick id: "titre vide rejete"
    checkout main
    cherry-pick id: "titre vide rejete"
