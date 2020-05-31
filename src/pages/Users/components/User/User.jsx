import React, { useState, useEffect } from "react";

import "./style.scss";
import firtsFacePng from "../../../../assets/4.png";
import secondFacePng from "../../../../assets/2.png";
import thrithFacePng from "../../../../assets/6.png";

export const User = (props) => {
    const [content, setContent] = useState('');
    const { name, secondName, index } = props;

    useEffect(() => {
        if ((index % 2) === 0) {
            setContent(`Рождённый в пригороде Стагира, с детства выделялся своими способностями к красноречию и гребле. В настоящее же время усердно гребет с остальными коллегами.`);
            return;
        }

        if ((index % 3) === 0) {
            setContent(`Родом из Кенхреи, славен своими трудами в изобразительном искувстве, и инженерном деле. Сейчас на нем держится весь внешний вид Galley`);
            return;
        }
        
        setContent(`Ее мы подобрали у берегов Аль-Мина, ничем не примечательна, кроме уродливого внешнего вида.`);
        return;
    }, [])

    const renderAvatar = () => {
        if ((index % 2) === 0) {
            // setContent(`Рождённый в пригороде Стагира, с детства выделялся своими способностями к красноречию и гребле. В настоящее же время усердно гребет с остальными коллегами.`);
            return <img src={firtsFacePng} alt="avatar"/>
        }

        if ((index % 3) === 0) {
            // setContent(`Родом из Кенхреи, славен своими трудами в изобразительном искувстве, и инженерном деле. Сейчас на нем держится весь внешний вид Galley`);
            return <img src={secondFacePng} alt="avatar"/>
        }
        
        // setContent(`Ее мы подобрали у берегов Аль-Мина, ничем не примечательна, кроме уродливого внешнего вида.`);
        return <img src={thrithFacePng} alt="avatar"/>
    }

    return (
        <div className="user">
            <div className="avatar">
                {renderAvatar()}
            </div>
            <div className="info">
                <h3>{`${name} ${secondName}`}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}