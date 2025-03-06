import React from "react";
import "./../assets/styles/components/_sidebar.scss";
import SquareLogo from "./SquareLogo";
import yoga from "./../assets/images/yoga.svg";
import swimming from "./../assets/images/swimming.svg";
import cycling from "./../assets/images/cycling.svg";
import fitness from "./../assets/images/fitness.svg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div></div>
            <nav className="sidebar-nav">
                <SquareLogo
                    src={yoga}
                    alt="logo de yoga"
                    className="sidebar-logo"
                    width="64px"
                    bgColor="white"
                ></SquareLogo>
                <SquareLogo
                    src={swimming}
                    alt="logo de natation"
                    className="sidebar-logo"
                    width="64px"
                    bgColor="white"
                ></SquareLogo>
                <SquareLogo
                    src={cycling}
                    alt="logo de cyclisme"
                    className="sidebar-logo"
                    width="64px"
                    bgColor="white"
                ></SquareLogo>
                <SquareLogo
                    src={fitness}
                    alt="logo de fitness"
                    className="sidebar-logo"
                    width="64px"
                    bgColor="white"
                ></SquareLogo>
                {/* <Swimming /> */}
            </nav>
            <p className="sidebar-copyright">Copyright, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;
