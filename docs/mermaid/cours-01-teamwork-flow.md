gitGraph
    commit id: "base commune"
    branch alice
    checkout alice
    commit id: "proposition alice"
    checkout main
    branch bob
    checkout bob
    commit id: "proposition bob"
    checkout main
    merge alice
    merge bob
    commit id: "main stable"