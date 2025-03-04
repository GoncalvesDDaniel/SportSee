import React from "react";
import SquareLogo from "./SquareLogo";
import yoga from "./../assets/images/yoga.svg";
import swimming from "./../assets/images/swimming.svg";
import cycling from "./../assets/images/cycling.svg";
import fitness from "./../assets/images/fitness.svg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div></div>
            <nav>
                <SquareLogo src={yoga} alt="logo de yoga"></SquareLogo>
                <SquareLogo></SquareLogo>
                <SquareLogo></SquareLogo>
                <SquareLogo></SquareLogo>
                {/* <Swimming /> */}
            </nav>
            <div>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </div>
    );
}

export default Sidebar;
