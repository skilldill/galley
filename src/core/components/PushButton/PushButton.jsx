import React, { useState } from "react";
import cn from "classnames";

import "./style.scss";
import rabbitPng from "../../../assets/Заяц.png";

export const PushButton = () => {
    const [hovered, setHovered] = useState(false);

    const classes = cn({
        'push-btn': true,
        'push-btn-hovered': hovered
    })

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div 
            className={classes}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="picture">
                <img src={rabbitPng} alt="Заяц"/>
            </div>
            <p>Ускорить грбецов</p>
            <div className="picture">
                <img src={rabbitPng} alt="Заяц"/>
            </div>
        </div>
    )
}