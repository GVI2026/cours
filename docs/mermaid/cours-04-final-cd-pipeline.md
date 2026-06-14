flowchart LR
    install["install<br/>Installation des dépendances"]
    formatLint["format-lint<br/>Formatage & lint"]
    tests["tests<br/>Tests unitaires"]
    testsE2E["tests-e2e<br/>Tests E2E"]
    build["build<br/>Build + artefact build-dist"]
    security["security<br/>Scan Trivy"]
    release["release<br/>Version + tag"]
    publishNpm["publish-npm<br/>Publication Verdaccio"]
    publishDocker["publish-docker<br/>Publication registry:2"]
    deployNpm["deploy-npm<br/>Déploiement cible SSH npm"]
    deployDocker["deploy-docker<br/>Déploiement cible SSH Docker"]
    healthcheck["healthcheck-deployment<br/>Vérification finale"]
    rollback["rollback<br/>Retour arrière si échec"]

    install --> formatLint --> tests --> testsE2E --> build --> security --> release
    release --> publishNpm --> deployNpm --> healthcheck
    release --> publishDocker --> deployDocker --> healthcheck
    healthcheck --> rollback
