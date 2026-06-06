gitGraph
    commit id: "v1.0-baseline"
    branch release/v1.0
    checkout main
    commit id: "init-dev-v2"
    branch feature/add-task-stats
    commit id: "GET-tasks-stats"
    checkout main
    merge feature/add-task-stats id: "integration-v2-stats"
    commit id: "suite-produit-v2"
    branch release/v2.0
    checkout main
    branch hotfix/fix-title
    commit id: "fix-titre-vide"
    checkout main
    merge hotfix/fix-title id: "fix-main"
    checkout release/v2.0
    cherry-pick id: "fix-titre-vide"
    checkout release/v1.0
    cherry-pick id: "fix-titre-vide"
    commit id: "tag-v1.0.1"