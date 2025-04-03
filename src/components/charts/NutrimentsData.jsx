import React from "react";
import SquareLogo from "../ui/SquareLogo";
import "./../../assets/styles/charts/_nutrimentsData.scss";
import apple from "./../../assets/images/apple.svg";
import cheeseburger from "./../../assets/images/cheeseburger.svg";
import chicken from "./../../assets/images/chicken.svg";
import energy from "./../../assets/images/energy.svg";

function NutrimentsData(props) {
    // console.log(id1.data.keyData);
    return (
        <section className="nutrimentsData-container">
            <div className="nutriment-box">
                <div className="nutriment-box_logo">
                    <SquareLogo
                        src={energy}
                        alt="Icône calories"
                        width="60"
                        bgColor=" rgba(255, 0, 0, 0.1)"
                    />
                </div>
                <div className="nutriment-box_info">
                    <p className="value">
                        {Intl.NumberFormat("en-US").format(
                            props.data.calorieCount
                        )}
                        kCal
                    </p>
                    <p className="label">Calories</p>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriment-box_logo">
                    <SquareLogo
                        src={chicken}
                        alt="Icône protéines"
                        width="60"
                        bgColor="rgba(74,184,255,0.1)"
                    />
                </div>
                <div className="nutriment-box_info">
                    <p className="value">{props.data.proteinCount}g</p>
                    <p className="label">Proteines</p>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriment-box_logo">
                    <SquareLogo
                        src={apple}
                        alt="Icône glucides"
                        width="60"
                        bgColor="rgba(249, 206, 35, 0.1)"
                    />
                </div>
                <div className="nutriment-box_info">
                    <p className="value">{props.data.carbohydrateCount}g</p>
                    <p className="label">Glucides</p>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriment-box_logo">
                    <SquareLogo
                        src={cheeseburger}
                        alt="Icône lipides"
                        width="60"
                        bgColor="rgba(253, 81, 129, 0.1)"
                    />
                </div>
                <div className="nutriment-box_info">
                    <p className="value">{props.data.lipidCount}g</p>
                    <p className="label">Lipides</p>
                </div>
            </div>
        </section>
    );
}

export default NutrimentsData;
