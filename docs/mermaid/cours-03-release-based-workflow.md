gitGraph
    commit id: "base stable"
    
    %% Initialisation et tag de la v1.0.0
    branch release-v1
    checkout release-v1
    commit id: "chore(release): 1.0.0" tag: "v1.0.0"
    
    checkout main
    commit id: "init dev v1.1"
    branch feature-stats
    checkout feature-stats
    commit id: "GET tasks stats"
    checkout main
    merge feature-stats id: "PR fusionnee v1.1"
    
    %% Initialisation et tag de la v1.1.0
    branch release-v1-1
    checkout release-v1-1
    commit id: "chore(release): 1.1.0" tag: "v1.1.0"
    
    checkout main
    commit id: "..."
    commit id: "suite produit"
    
    %% Le hotfix part de la v1.0.0
    checkout release-v1
    branch hotfix-title
    checkout hotfix-title
    commit id: "fix titre vide"
    
    %% Application et tag v1.0.1
    checkout release-v1
    merge hotfix-title id: "fix merged to v1"
    commit id: "chore(release): 1.0.1" tag: "v1.0.1"
    
    %% Upstream sur main
    checkout main
    cherry-pick id: "fix titre vide"
    
    %% Report et tag v1.1.1
    checkout release-v1-1
    cherry-pick id: "fix titre vide"
    commit id: "chore(release): 1.1.1" tag: "v1.1.1"
