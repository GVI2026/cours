flowchart TD
    deploy["Deploiement nouvelle version"]
    health["Healthcheck final"]
    ok{"Les deux services repondent ?"}
    done["Pipeline verte<br/>la version reste en place"]
    rollbackNpm["Rollback npm<br/>version precedente connue"]
    rollbackDocker["Rollback Docker<br/>image precedente locale"]
    fail["Incident visible<br/>logs a analyser"]

    deploy --> health --> ok
    ok -- oui --> done
    ok -- non --> rollbackNpm --> fail
    ok -- non --> rollbackDocker --> fail
