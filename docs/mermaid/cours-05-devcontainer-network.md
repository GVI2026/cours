flowchart TB
    subgraph host["Machine hote"]
        vscode["VS Code"]
        browser["Navigateur / curl"]
        dockerEngine["Moteur Docker<br/>execute les conteneurs"]
    end

    subgraph dev["DevContainer<br/>environnement de travail"]
        node["Node 24 + npm"]
        git["Git"]
        dockerCli["Docker CLI<br/>client vers le moteur hote"]
        actCli["act<br/>cree des runners via Docker"]
        sshClient["SSH client"]
        socat["Relais socat<br/>localhost vers services"]
    end

    subgraph tp["Reseau Docker cd-network"]
        verdaccio["verdaccio:4873"]
        registry["registry:5000"]
        sshNpm["ssh-npm-target:22<br/>app:3000"]
        sshDocker["ssh-docker-target:22<br/>app:3000"]
        actRunner["runner act ephemere"]
    end

    vscode --> dev
    browser -- "localhost:4873/5000/3001/3002" --> socat
    socat --> verdaccio
    socat --> registry
    socat --> sshNpm
    socat --> sshDocker
    dockerCli -- "commandes Docker" --> dockerEngine
    actCli -- "demande un runner" --> dockerEngine
    dockerEngine -- "lance" --> tp
    sshClient -- "localhost:2222" --> socat
    sshClient -- "localhost:2223" --> socat
    actRunner -- "reseau du TP" --> verdaccio
    actRunner -- "reseau du TP" --> registry
    actRunner -- "SSH" --> sshNpm
    actRunner -- "SSH" --> sshDocker
