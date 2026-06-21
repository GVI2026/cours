flowchart LR
    source["Code source"]
    build["Job build<br/>dist/"]
    artifact["Artefact build-dist"]
    image["docker build<br/>image versionnee"]
    registry["registry:2<br/>localhost:5000"]
    deploy["deploy-docker<br/>SSH :2223"]
    container["Conteneur applicatif<br/>tp-cd-deployment-app"]
    health["Healthcheck<br/>localhost:3002/health"]

    source --> build --> artifact --> image --> registry --> deploy --> container --> health
