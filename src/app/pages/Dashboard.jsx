import React from "react";
import { NavLink, useParams } from "react-router";

function Dashboard() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <h1>Dashboard</h1>
            {/* <NavLink to={`/${id}/dashboard`}>Link to Dashboard</NavLink> */}
        </>
    );
}

export default Dashboard;
