import React from "react";

import "./style.scss";
import firtsFacePng from "../../../../assets/4.png";
import secondFacePng from "../../../../assets/2.png";
import thrithFacePng from "../../../../assets/6.png";

export const User = (props) => {
    const { name, secondName, index } = props;

    const renderAvatar = () => {
        if ((index % 2) === 0) {
            return <img src={firtsFacePng} alt="avatar"/>
        }

        if ((index % 3) === 0) {
            return <img src={secondFacePng} alt="avatar"/>
        }

        return <img src={thrithFacePng} alt="avatar"/>
    }

    return (
        <div className="user">
            <div className="avatar">
                {renderAvatar()}
            </div>
            <div className="info">
                <h3>{name}</h3>
                <h3>{secondName}</h3>
            </div>
        </div>
    )
}