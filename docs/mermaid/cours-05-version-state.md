stateDiagram-v2
    [*] --> Commit: commit sur main
    Commit --> Build: CI verte
    Build --> Version: release SemVer
    Version --> PackageNpm: package npm publie
    Version --> ImageDocker: image Docker publiee
    PackageNpm --> ServiceNpm: deploy-npm
    ImageDocker --> ServiceDocker: deploy-docker
    ServiceNpm --> Healthcheck
    ServiceDocker --> Healthcheck
    Healthcheck --> [*]: version deployee et verifiee
