import React from "react";
import { NavLink, useParams } from "react-router";
import Title from "../../components/Title";
// import BarChart from "../../components/charts/ActivityCharts";
import ActivityCharts from "../../components/charts/ActivityCharts";
import SessionsCharts from "../../components/charts/SessionsCharts";
import PerformanceCharts from "../../components/charts/PerformanceCharts";

function Dashboard() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <>
            <Title name="Thomas" />
            {/* <BarChart /> */}
            <ActivityCharts />
            <SessionsCharts />
            <PerformanceCharts />
        </>
    );
}

export default Dashboard;
