gitGraph
    commit id: "v1 en prod"
    branch production/v1
    checkout main
    commit id: "ligne courante"
    branch feature/add-task-stats
    commit id: "GET /tasks/stats"
    checkout main
    merge feature/add-task-stats
    checkout production/v1
    branch hotfix/fix-title-validation
    commit id: "titre vide rejete"
    checkout production/v1
    merge hotfix/fix-title-validation
    checkout main
    cherry-pick id: "titre vide rejete"