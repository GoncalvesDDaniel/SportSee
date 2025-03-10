import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./../../assets/styles/pages/_dashboardLayout.scss";
import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default DashboardLayout;
