gitGraph
    commit id: "init" tag: "v1.0.0"
    branch develop
    checkout develop
    commit id: "base develop"
    branch feature/add-task-stats
    checkout feature/add-task-stats
    commit id: "feat: stats endpoint"
    commit id: "test: stats"
    checkout develop
    merge feature/add-task-stats id: "merge feature"
    branch release/1.1.0
    checkout release/1.1.0
    commit id: "chore: bump 1.1.0"
    checkout main
    merge release/1.1.0 id: "release" tag: "v1.1.0"
    checkout develop
    merge release/1.1.0 id: "back-merge release"
    checkout main
    branch hotfix/fix-title
    checkout hotfix/fix-title
    commit id: "fix: empty title"
    checkout main
    merge hotfix/fix-title id: "hotfix" tag: "v1.1.1"
    checkout develop
    merge hotfix/fix-title id: "back-merge hotfix"
