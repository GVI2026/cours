gitGraph
    commit id: "base stable"
    commit id: "correctifs"
    branch feature/add-task-filter
    checkout feature/add-task-filter
    commit id: "feat: filter by done"
    commit id: "test: adapt filter"
    checkout main
    merge feature/add-task-filter id: "PR fusionnée"
    commit id: "main toujours stable"
