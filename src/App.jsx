import { NavLink, Outlet } from "react-router";
import "./App.css";
import Dashboard from "./app/pages/Dashboard";
import DashboardLayout from "./app/layouts/DashboardLayout";

function App() {
    return (
        <>
            <DashboardLayout />
        </>
    );
}

export default App;
