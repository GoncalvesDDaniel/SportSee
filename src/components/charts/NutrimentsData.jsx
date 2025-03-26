import React from "react";
import SquareLogo from "../SquareLogo";
import id1 from "./../../services/mocks/user/id1.json";
import "./../../assets/styles/components/charts/_nutrimentsData.scss";
import apple from "./../../assets/images/apple.svg";
import cheeseburger from "./../../assets/images/cheeseburger.svg";
import chicken from "./../../assets/images/chicken.svg";
import energy from "./../../assets/images/energy.svg";

function NutrimentsData(props) {
    // console.log(id1.data.keyData);
    return (
        <section className="nutrimentsData-container">
            <div className="nutriment-box">
                <div className="nutriments-box_logo">
                    <SquareLogo
                        scr={energy}
                        alt=""
                        width="60"
                        bgColor=" rgba(255, 0, 0, 0.1)"
                    />
                </div>
                <div className="nutriments-box_calories">
                    <p>
                        {Intl.NumberFormat("en-US").format(
                            id1.data.keyData.calorieCount
                        )}
                        kCal
                    </p>
                    <h2>Calories</h2>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriments-box_logo">
                    <SquareLogo
                        scr={chicken}
                        alt=""
                        width="60"
                        bgColor="rgba(74,184,255,0.1)"
                    />
                </div>
                <div className="nutriments-box_proteins">
                    <p>{id1.data.keyData.proteinCount}g</p>
                    <h2>Proteines</h2>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriments-box_logo">
                    <SquareLogo
                        scr={apple}
                        alt=""
                        width="60"
                        bgColor="rgba(249, 206, 35, 0.1)"
                    />
                </div>
                <div className="nutriments-box_carbohydrates">
                    <p>{id1.data.keyData.carbohydrateCount}g</p>
                    <h2>Glucides</h2>
                </div>
            </div>
            <div className="nutriment-box">
                <div className="nutriments-box_logo">
                    <SquareLogo
                        scr={cheeseburger}
                        alt=""
                        width="60"
                        bgColor="rgba(253, 81, 129, 0.1)"
                    />
                </div>
                <div className="nutriments-box_lipids">
                    <p>{id1.data.keyData.lipidCount}g</p>
                    <h2>Lipides</h2>
                </div>
            </div>
        </section>
    );
}

export default NutrimentsData;
