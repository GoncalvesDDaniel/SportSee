import React from "react";
import { useParams } from "react-router";
import Title from "./../../components/ui/Title";
import ActivityCharts from "../../components/charts/ActivityCharts";
import SessionsCharts from "../../components/charts/SessionsCharts";
import PerformanceCharts from "../../components/charts/PerformanceCharts";
import ScoreCharts from "../../components/charts/ScoreCharts";
import NutrimentsData from "../../components/charts/NutrimentsData";
import useDashboardData from "../../services/api/useDashboardData";

/**
 * Composant principal de la page Dashboard.
 * Récupère l'ID utilisateur depuis l'URL, fetch et formate toutes les données
 * Gère également les états de chargement et d'erreur.
 * Puis affiche les graphiques et informations utilisateur.
 */
function Dashboard() {
    const { id } = useParams();
    const { data, loading, error } = useDashboardData(id);
    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }
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
