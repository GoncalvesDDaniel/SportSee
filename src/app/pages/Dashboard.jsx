import React from "react";
import { useParams } from "react-router";
import Title from "../../components/Title";
import ActivityCharts from "../../components/charts/ActivityCharts";
import SessionsCharts from "../../components/charts/SessionsCharts";
import PerformanceCharts from "../../components/charts/PerformanceCharts";
import ScoreCharts from "../../components/charts/ScoreCharts";
import NutrimentsData from "../../components/charts/NutrimentsData";
import useFetch from "../../services/api/useFetch";
import useDashboardData from "../../services/api/useDashvoardData";

function Dashboard() {
    // Récupérer l'ID de l'URL
    const { id } = useParams();
    const { data, loading, error } = useDashboardData(id);
    if (loading) {
        return <div>Chargement des données...</div>; // Ou un composant Spinner
    }

    if (error) {
        return <div>Erreur : {error}</div>; // Affiche l'erreur
    }
    // console.log(id);
    // console.log(data);
    return (
        <>
            <Title firstName={data.user.firstName} />
            <ActivityCharts data={data.activity} />
            <SessionsCharts data={data.averageSessions} />
            <PerformanceCharts data={data.performance} />
            <ScoreCharts data={data.user.score} />
            <NutrimentsData data={data.user.keyData} />
        </>
    );
}

export default Dashboard;
