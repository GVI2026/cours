sequenceDiagram
    participant P as Pipeline Actions
    participant S as SSH-target
    participant V as Verdaccio
    participant M as pm2
    P->>S: SSH deployer@localhost:2222
    S->>V: npm install tp-cd-api@version
    V-->>S: package versionne
    S->>M: pm2 restart tp-cd-api
    M-->>S: application relancee
    S->>S: curl localhost:3000/health
    S-->>P: statut interne OK/KO
    P->>S: smoke test externe via localhost:3001
    S-->>P: 200 ou echec
