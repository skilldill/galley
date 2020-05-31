import React from "react";

import "./style.scss";
import avatarPng from "../../../../assets/4.png";

export const User = (props) => {
    const { name, secondName } = props;

    return (
        <div className="user">
            <div className="avatar">
                <img src={avatarPng} alt="avatar"/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <h3>{secondName}</h3>
            </div>
        </div>
    )
}