flowchart LR
    PLAN["🗓 Plan\nBacklog, sprints\npriorités"] --> CREATE
    CREATE["✏️ Create\nCode, revues\nPR"] --> VERIFY
    VERIFY["🔬 Verify\nTests, lint\nbuild CI"] --> PACKAGE
    PACKAGE["📦 Package\nArtéfacts\nimages"] --> RELEASE
    RELEASE["🚀 Release\nDéploiement\nprod"] --> CONFIGURE
    CONFIGURE["⚙️ Configure\nInfra, secrets\nenv"] --> MONITOR
    MONITOR["📊 Monitor\nLogs, alertes\nincidents"] --> PLAN
