sequenceDiagram
    participant Local as Local
    participant Dev as DevContainer
    participant Act as act
    participant Runner as Runner ephemere
    participant Services as Services Docker
    participant Target as Cible SSH

    Student->>Dev: act -j healthcheck-deployment
    Dev->>Act: charge .github/workflows/ci.yml
    Act->>Runner: cree un conteneur runner
    Runner->>Services: lit Verdaccio et registry
    Runner->>Target: deploie via SSH si necessaire
    Runner->>Services: curl /health
    Runner-->>Act: logs + statut
    Act-->>Dev: succes ou echec
