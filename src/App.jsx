import { NavLink } from "react-router";
import "./App.css";
import "./assets/styles/main.scss";

function App() {
    return (
        <>
            <h1>Hello App</h1>
            <NavLink to="/profil/12" end>
                profil 12
            </NavLink>
        </>
    );
}

export default App;
