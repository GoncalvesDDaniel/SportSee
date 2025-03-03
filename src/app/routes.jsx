import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Profil from "./pages/Profil";
import Dashboard from "./pages/Dashboard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/profil/:id" element={<Profil />} />
        </Routes>
    </BrowserRouter>
);
