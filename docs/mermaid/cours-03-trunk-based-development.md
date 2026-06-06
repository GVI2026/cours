gitGraph
    commit id: "chore(release): v1.1.0" tag: "v1.1.0"
    
    commit id: "feat: mon profil"
    commit id: "chore(release): v1.1.1" tag: "v1.1.1"
    
    branch short-feat
    checkout short-feat
    commit id: "feat: ajout devises"
    
    checkout main
    merge short-feat id: "PR courte + CI validée"
    commit id: "chore(release): v1.2.0" tag: "v1.2.0"
    
    commit id: "feat: virement (feature flag)"
    commit id: "chore(release): v1.2.1" tag: "v1.2.1"