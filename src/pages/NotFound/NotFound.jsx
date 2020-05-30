import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import Kolyan from "../../assets/Колян.png";

export const NotFound = () => {
    const [showKolyan, setShowKolyan] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Пууустооо...'))
        const timerKolyan = setTimeout(() => {
            setShowKolyan(true);
        }, 100);

        return () => {
            clearTimeout(timerKolyan);
        }
    }, []);

    const classesKolyan = cn({
        'kolyan': true,
        'kolyan-show': showKolyan
    })

    return (
        <div className="not-found">
            <h1>
                Ты куда своим пальцем тычешь?
            </h1>
            <img 
                className={classesKolyan} 
                src={Kolyan} 
                alt="kolyan"
            />
        </div>
    )
}