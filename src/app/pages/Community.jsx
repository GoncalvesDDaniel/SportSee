import React from "react";
import { NavLink, useParams } from "react-router";

function Community() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Community</h1>
            <NavLink to={`/${id}/dashboard`}>Link to Dashboard</NavLink>
        </>
    );
}

export default Community;
