import React from "react";
import { NavLink, useParams } from "react-router";

function Profil() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Profil</h1>
            <NavLink to={`/${id}/dashboard`}>Link to Dashboard</NavLink>
        </>
    );
}

export default Profil;
