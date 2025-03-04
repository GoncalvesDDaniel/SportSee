import React from "react";
import { NavLink, useParams } from "react-router";

function Settings() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Settings</h1>
            <NavLink to={`/${id}/dashboard`}>Link to Dashboard</NavLink>
        </>
    );
}
export default Settings;
