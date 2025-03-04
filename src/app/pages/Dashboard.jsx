import React from "react";
import { NavLink, useParams } from "react-router";

function Dashboard() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Dashboard</h1>
            <NavLink to={`/${id}/profil`}>profil 1</NavLink>
        </>
    );
}

export default Dashboard;
