import React from "react";
import "./../../assets/styles/components/_title.scss";

function Title(props) {
    return (
        <>
            <div className="title-container">
                <h1 className="title-name">
                    Bonjour{" "}
                    <span className="title-name_persona">
                        {props.firstName}
                    </span>
                </h1>
                <p className="title-objectif">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </div>
        </>
    );
}

export default Title;
