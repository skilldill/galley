import React, { useState } from "react";
import cn from "classnames";

import "./style.scss";
import rabbitPng from "../../../assets/Заяц.png";
import { ApiService } from "../../../shared/http";

export const PushButton = () => {
    const [hovered, setHovered] = useState(false);
    const [content, setContent] = useState('Ускорить грбецов');

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

    const sendMessage = async () => {
        try {
            setContent('УСКОРЯЮ...')
            await ApiService.sendMessage();
        } catch(error) {
            console.log(error);
        } finally {
            setContent('Ускорить грбецов');
        }
    }

    const handleClick = () => {
        sendMessage();
    }

    return (
        <div 
            className={classes}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="picture">
                <img src={rabbitPng} alt="Заяц"/>
            </div>
                <p>{content}</p>
            <div className="picture">
                <img src={rabbitPng} alt="Заяц"/>
            </div>
        </div>
    )
}