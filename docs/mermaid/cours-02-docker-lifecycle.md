flowchart LR
    DF[Dockerfile] -->|docker build| IMG[Image locale]
    IMG -->|docker run| CNT[Conteneur actif]
    CNT -->|docker stop| STP[Conteneur arrêté]
    STP -->|docker rm| DEL1([Supprimé])
    IMG -->|docker rmi| DEL2([Image supprimée])
