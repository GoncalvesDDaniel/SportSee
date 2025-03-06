import React from "react";
import { NavLink, useParams } from "react-router";
import Title from "../../components/Title";
import BarChart from "../../components/charts/ActivityCharts";

function Dashboard() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <Title name="Thomas" />
            <BarChart />
        </>
    );
}

export default Dashboard;
