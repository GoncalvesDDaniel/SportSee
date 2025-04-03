import React from "react";
import Header from "../../components/ui/Header";
import Sidebar from "../../components/ui/Sidebar";
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
