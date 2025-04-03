import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Community from "../app/pages/Community";
import Settings from "../app/pages/Settings";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Routes,
    Route,
    Navigate,
} from "react-router";

/**
 * Configuration principale du routage de l'application SportSee.
 * Utilise React Router pour définir la structure de navigation.
 *
 * Points clés :
 * - Redirection initiale depuis la racine ('/') vers le dashboard de l'utilisateur 12 (un des deux utilisateurs fournis par l'API locale).
 *
 *   -> NOTE : C'est un choix délibéré pour une présentation immédiate. L'utilisateur 18 est accessible via l'URL `/user/18/dashboard`.
 *
 * - Utilisation d'un layout commun (`DashboardLayout` incluant header et sidebar) pour les pages principales.
 *
 * - Routes définies pour les différentes sections (Profil, Settings, Community), mais ces pages sont des placeholders non fonctionnels pour ce projet.
 */
const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to="/12/dashboard" />} />
            <Route path="/:id" element={<DashboardLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profil" element={<Profil />} />
                <Route path="community" element={<Community />} />
            </Route>
        </>
    )
);
export default routes;
