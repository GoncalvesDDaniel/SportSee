import React, { Suspense } from "react";
import { NavLink, useParams } from "react-router";
import Title from "../../components/Title";
// import BarChart from "../../components/charts/ActivityCharts";
import ActivityCharts from "../../components/charts/ActivityCharts";
import SessionsCharts from "../../components/charts/SessionsCharts";
import PerformanceCharts from "../../components/charts/PerformanceCharts";
import ScoreCharts from "../../components/charts/ScoreCharts";
import NutrimentsData from "../../components/charts/NutrimentsData";
import FetchData from "../../services/api/useFetch";
import useFetch from "../../services/api/useFetch";

function Dashboard() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    const { data, loading, error } = useFetch("http://localhost:3000/user/12");
    console.log(data);
    return (
        <>
            <Title name="Thomas" />
            {/* <BarChart /> */}
            <ActivityCharts />
            <SessionsCharts />
            <PerformanceCharts />
            <ScoreCharts />
            <NutrimentsData />
            {/* <NutrimentsData><SquareLogo /></NutrimentsData> */}
        </>
    );
}

export default Dashboard;
