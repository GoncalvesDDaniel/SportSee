# SportSee - Dashboard d'Analytics Sportive

## Frontend - Projet 12 OpenClassrooms

Ce projet est l'interface utilisateur développée en React. Il permet de visualiser les données d'un utilisateur sous forme de graphique. Ce projet fait partie de la formation Développeur Web d'OpenClassrooms.

**Important :** Ce frontend nécessite le backend SportSee pour fonctionner.

## 1. Prérequis

-   **Frontend (ce projet) :**

    -   Node.js (v12.18 ou supérieur recommandé, compatible avec le backend)
    -   npm ou yarn

-   **Backend SportSee :**
    -   [Lien GitHub vers le backend](https://github.com/OpenClassrooms-Student-Center/SportSee)
    -   Le backend doit être cloné, installé et **lancé séparément**.
    -   Instructions de lancement du backend : (voir le README).
    -   Le backend doit tourner sur : `http://localhost:3000`.

## 2. Installation du Frontend

1.  Clonez ce dépôt :
    ```bash
    git clone https://github.com/GoncalvesDDaniel/SportSee
    ```
2.  Naviguez dans le dossier du projet :
    ```bash
    cd SportSee
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

## 3. Lancement du Frontend

1.  **Vérifiez IMPÉRATIVEMENT que le backend est démarré et fonctionnel** sur `http://localhost:3000`.
2.  Lancez l'application frontend :
    ```bash
    npm start
    ```
    ou
    ```bash
    yarn start
    ```

## 4. Utilisateurs Disponibles

Le backend fournit actuellement des données pour deux utilisateurs :

-   User ID : `12`
-   User ID : `18`

Vous pouvez accéder à leur tableau de bord via les URLs correspondantes dans l'application (par exemple : `/12/dashboard`, `18/dashboard`).

## 5. Technologies Utilisées (Frontend)

-   **React**
-   **React Router** : Pour la navigation entre les pages/utilisateurs.
-   **Recharts** : Pour la création des graphiques de visualisation de données.
-   **SASS** : Pour la mise en forme des composants.
-   **Fetch API** : Pour récupérer les données depuis le backend.
-   **PropTypes** : Pour la validation et la documentation des props des composants React.

## 6. Pistes d'Amélioration & Feedback

Ce projet a été réalisé dans le cadre d'un parcours d'apprentissage. Il y a certainement des aspects qui pourraient être améliorés.

Si vous avez des suggestions, des remarques ou si vous repérez des bugs :

-   N'hésitez pas à ouvrir une **Issue** sur ce dépôt GitHub.
-   Vous pouvez également me contacter [via mon profil LinkedIn](https://www.linkedin.com/in/daniel-d-gon%C3%A7alves/).

Tout retour constructif est le bienvenu !
