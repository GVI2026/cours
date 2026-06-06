gitGraph
    %% Initialisation du projet avec les branches d'environnement éternelles
    commit id: "Init projet"
    branch staging
    branch production
    
    %% Le développement quotidien se fait via main (ou des feature branches qui y mènent)
    checkout main
    commit id: "Feature: Login bancaire"
    commit id: "Feature: Rapprochement"
    
    %% Étape 1 : Promotion vers le Staging pour la phase de recette/validation
    checkout staging
    merge main id: "Déploiement en Staging"
    commit id: "Fix: Ajustement sécurité"
    
    %% Étape 2 : Une fois validé en Staging, le code est promu en Production
    checkout production
    merge staging id: "Release v1.0.0 (Production)"
    
    %% Le flux continue sur Main pour les prochaines fonctionnalités
    checkout main
    commit id: "Feature: Virement instantané"