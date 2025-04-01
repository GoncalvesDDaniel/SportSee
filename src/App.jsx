import { NavLink, Outlet, UNSAFE_RemixErrorBoundary } from "react-router";
import "./App.css";
import Dashboard from "./app/pages/Dashboard";
import FetchData from "./services/api/useFetch";
import DashboardLayout from "./app/layouts/DashboardLayout";
import { Suspense } from "react";

function App() {
    alert("hello App");
    return (
        // <Suspense>
        <DashboardLayout />
        // </Suspense>
    );
}

export default App;
