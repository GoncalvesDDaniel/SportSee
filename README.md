# SportSee - Dashboard d'Analytics Sportive (Frontend - Projet 12 OpenClassrooms)

Ce projet est l'interface utilisateur développée en React. Il permet de visualiser les données d'un utilisateur sous forme de graphique. Ce projet fait partie de la formation Développeur Web d'OpenClassrooms.

**Important :** Ce frontend nécessite le backend SportSee pour fonctionner.

## 1. Prérequis

-   **Backend SportSee :**
    -   Le backend doit être cloné, installé et **lancé séparément**.
    -   Référentiel du backend : `https://github.com/OpenClassrooms-Student-Center/SportSee`
    -   Instructions de lancement du backend : (voir son README).
    -   Le backend doit tourner sur : `http://localhost:3000`.
-   **Frontend (ce projet) :**
    -   Node.js (v12.18 ou supérieur recommandé, compatible avec le backend)
    -   npm ou yarn

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

-   **React** (v17 ou v18 - précise ta version)
-   **React Router** (v6 - précise ta version) : Pour la navigation entre les pages/utilisateurs.
-   **Recharts** : Pour la création des graphiques de visualisation de données.
-   **Styled Components** / **CSS Modules** / **SASS** (Précise la méthode de styling que tu as choisie) : Pour la mise en forme des composants.
-   **Axios** / **Fetch API** (Précise comment tu fais tes appels API) : Pour récupérer les données depuis le backend.
-   **PropTypes** : Pour la validation et la documentation des props des composants React.

## 6. Endpoints API Utilisés

Ce frontend consomme les endpoints suivants du backend (tournant sur `http://localhost:3000`) :

-   `/user/${userId}` : Informations générales de l'utilisateur (nom, score, données clés).
-   `/user/${userId}/activity` : Activité quotidienne (poids, calories).
-   `/user/${userId}/average-sessions` : Durée moyenne des sessions.
-   `/user/${userId}/performance` : Données de performance (radar chart).
