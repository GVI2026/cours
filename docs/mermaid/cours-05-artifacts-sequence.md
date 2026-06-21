sequenceDiagram
    participant Build as job build
    participant Store as GitHub Actions artifacts
    participant Npm as publish-npm
    participant Docker as publish-docker
    participant Verdaccio as Verdaccio
    participant Registry as registry:2

    Build->>Build: npm run build
    Build->>Store: upload-artifact build-dist
    Store-->>Npm: download-artifact dist/
    Npm->>Verdaccio: npm publish
    Store-->>Docker: download-artifact dist/
    Docker->>Registry: docker build + docker push
