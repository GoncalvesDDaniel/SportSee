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

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Redirection par défaut */}
            <Route path="/" element={<Navigate to="/1/dashboard" />} />

            {/* Routes imbriquées sous "/:id" */}
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
