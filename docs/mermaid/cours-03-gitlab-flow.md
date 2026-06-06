gitGraph
    commit id: "base stable"
    branch staging
    checkout staging
    commit id: "init staging"
    branch production
    checkout production
    commit id: "init production"
    
    checkout main
    commit id: "feat: login bancaire"
    commit id: "feat: rapprochement"
    
    checkout staging
    merge main id: "PR staging"
    commit id: "v1.0.0-rc1" tag: "v1.0.0-rc1"
    commit id: "fix: ajustement secu"
    commit id: "v1.0.0-rc2" tag: "v1.0.0-rc2"
    
    checkout production
    merge staging id: "PR production"
    commit id: "chore(release): v1.0.0" tag: "v1.0.0"
    
    checkout main
    commit id: "feat: virement"