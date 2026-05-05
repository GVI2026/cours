flowchart TD
    EVENT["⚡ Événement déclencheur\npush · pull_request · schedule"] --> WORKFLOW

    subgraph WORKFLOW["Workflow — ci.yml"]
        direction TB
        JOB1["Job : install\n🖥 Runner Ubuntu"] --> JOB2
        JOB2["Job : format-lint\n🖥 Runner Ubuntu"] --> JOB3
        JOB3["Job : tests\n🖥 Runner Ubuntu"] --> JOB4
        JOB4["Job : build\n🖥 Runner Ubuntu"] --> JOB5
        JOB5["Job : security\n🖥 Runner Ubuntu"]
    end

    subgraph JOB_DETAIL["À l'intérieur d'un Job"]
        direction TB
        S1["Step 1 : actions/checkout@v4\n→ Action réutilisable"] --> S2
        S2["Step 2 : setup-node\n→ Action réutilisable"] --> S3
        S3["Step 3 : npm run lint\n→ Script shell"]
    end

    JOB2 -. "détail d'un job" .-> JOB_DETAIL
