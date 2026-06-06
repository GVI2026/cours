gitGraph
    commit id: "Init-projet"
    branch staging
    branch production
    checkout main
    commit id: "Login-bancaire"
    commit id: "Rapprochement"
    checkout staging
    merge main id: "Deploy-Staging"
    commit id: "Fix-securite"
    checkout production
    merge staging id: "Release-v1.0.0"
    checkout main
    commit id: "Virement-innov"