import React from "react";
import { NavLink, useParams } from "react-router";

/**
 * Composant placeholder pour cette page.
 *
 * Cette page n'est pas développée dans le cadre du projet.
 *
 * Elle affiche actuellement un titre et un lien de retour vers le dashboard
 * pour démontrer que le routage est fonctionnel.
 */
function Community() {
    const { id } = useParams();
    return (
        <>
            <h1>Community</h1>
            <NavLink to={`/${id}/dashboard`}>Link to Dashboard</NavLink>
        </>
    );
}

export default Community;
