gitGraph
    commit id: "base commune"
    branch alice
    checkout alice
    commit id: "README signe"
    checkout main
    branch bob
    checkout bob
    commit id: "notes TP"
    checkout main
    merge alice
    merge bob
    commit id: "main stable"