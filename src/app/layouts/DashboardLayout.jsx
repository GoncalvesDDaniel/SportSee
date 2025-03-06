import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <Outlet />
            </main>
        </>
    );
}

export default DashboardLayout;
