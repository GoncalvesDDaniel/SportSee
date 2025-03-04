import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import routes from "./app/routes.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
