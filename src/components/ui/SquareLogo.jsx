import React from "react";
import "./../../assets/styles/components/_squareLogo.scss";

function SquareLogo(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className="squareLogo"
            style={{
                width: `${props.width}`,
                backgroundColor: `${props.bgColor}`,
            }}
        />
    );
}

export default SquareLogo;
