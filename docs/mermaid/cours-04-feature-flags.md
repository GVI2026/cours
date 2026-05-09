gitGraph
   commit id: "main stable"
   branch "feature/short-flagged-work"
   commit id: "endpoint en cours"
   commit id: "flag OFF"
   checkout main
   merge "feature/short-flagged-work"
   commit id: "deploy prod" tag: "flag OFF"
   commit id: "activation" tag: "flag ON" type: HIGHLIGHT
