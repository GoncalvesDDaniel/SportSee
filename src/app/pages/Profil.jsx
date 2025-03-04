import React from "react";
import { NavLink, useParams } from "react-router";

function Profil() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Profil ID</h1>
            <NavLink to={`/${id}/dashboard`}>Main</NavLink>
        </>
    );
}

export default Profil;
