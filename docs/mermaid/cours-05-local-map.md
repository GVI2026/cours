flowchart TB
    user["Local<br/>navigateur, terminal, VS Code"]

    subgraph host["Local"]
        dockerEngine["Moteur Docker disponible sur la machine<br/>Docker Engine ou solution compatible"]
        devcontainer["DevContainer<br/>conteneur de travail VS Code"]
    end

    subgraph services["Conteneurs permanents du TP"]
        verdaccio["Verdaccio<br/>registre npm local"]
        registry["registry:2<br/>registre Docker local"]
        sshNpm["Cible SSH npm<br/>deploiement package + pm2"]
        sshDocker["Cible SSH Docker<br/>deploiement image Docker"]
    end

    subgraph runners["Conteneurs temporaires act"]
        runner["Runner GitHub Actions local<br/>cree pour executer un job"]
    end

    user --> devcontainer
    devcontainer -- "docker compose, docker ps, docker build" --> dockerEngine
    dockerEngine -- "lance et connecte" --> services
    devcontainer -- "act -j ..." --> runner
    runner -- "curl, npm publish, docker push, ssh" --> services
