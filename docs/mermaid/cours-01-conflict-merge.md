gitGraph
    commit id: "planning initial"
    branch equipe_a
    checkout equipe_a
    commit id: "modifie la priorite"
    checkout main
    branch equipe_b
    checkout equipe_b
    commit id: "modifie la meme zone"
    checkout main
    merge equipe_a
    merge equipe_b