import React from "react";
import "./../assets/styles/components/_header.scss";
import logo_main from "./../assets/images/logo_main.png";
import { NavLink, useParams } from "react-router";

function Header() {
    const { id } = useParams(); // Récupérer l'ID de l'URL
    return (
        <header>
            <img src={logo_main} alt="SportSee logo" className="header-logo" />
            <nav aria-label="Main Navigation" className="header-nav">
                <ul className="header-nav_ul">
                    <li className="header-nav_li">
                        <NavLink
                            to={`/${id}/dashboard`}
                            className="header-nav_link"
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header-nav_li">
                        <NavLink
                            to={`/${id}/profil`}
                            className="header-nav_link"
                        >
                            Profil
                        </NavLink>
                    </li>
                    <li className="header-nav_li">
                        <NavLink
                            to={`/${id}/settings`}
                            className="header-nav_link"
                        >
                            Réglage
                        </NavLink>
                    </li>
                    <li className="header-nav_li">
                        <NavLink
                            to={`/${id}/community`}
                            className="header-nav_link"
                        >
                            Communauté
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
