flowchart LR
    source["Code source"]
    build["Job build<br/>dist/"]
    artifact["Artefact build-dist"]
    publish["publish-npm<br/>npm publish"]
    verdaccio["Verdaccio<br/>localhost:4873"]
    deploy["deploy-npm<br/>SSH :2222"]
    pm2["pm2<br/>processus Node"]
    health["Healthcheck<br/>localhost:3001/health"]

    source --> build --> artifact --> publish --> verdaccio --> deploy --> pm2 --> health
