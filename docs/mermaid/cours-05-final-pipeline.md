flowchart TB
    subgraph CI["CI : verifier le changement"]
        install["install<br/>dependances"]
        formatLint["format-lint<br/>Prettier + ESLint"]
        tests["tests<br/>unitaires"]
        testsE2E["tests-e2e<br/>HTTP + SQLite memoire"]
        build["build<br/>dist + build-dist"]
        security["security<br/>Trivy"]
    end

    subgraph Delivery["Delivery : produire des livrables"]
        release["release<br/>version SemVer"]
        publishNpm["publish-npm<br/>package Verdaccio"]
        publishDocker["publish-docker<br/>image registry:2"]
    end

    subgraph Deployment["Deployment : installer et verifier"]
        deployNpm["deploy-npm<br/>SSH + pm2"]
        deployDocker["deploy-docker<br/>SSH + Docker"]
        healthcheck["healthcheck-deployment<br/>/health npm + docker"]
    end

    install --> formatLint --> tests --> testsE2E --> build --> security --> release
    release --> publishNpm --> deployNpm --> healthcheck
    release --> publishDocker --> deployDocker --> healthcheck
