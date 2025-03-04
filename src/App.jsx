import { NavLink, Outlet } from "react-router";
import "./App.css";
import "./assets/styles/main.scss";
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
