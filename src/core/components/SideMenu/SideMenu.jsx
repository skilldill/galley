import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import cn from "classnames";

import "./style.scss";
import incvisitionPng from "../../../assets/Инквизитор.png";
import { URLS } from "../../../shared/constants";

const MenuItem = (props) => {
    const { route, active } = props;
    const history = useHistory();

    const handleClick = () => {
        history.push(route.path);
    }

    const classes = cn({
        'side-menu-item': true,
        'side-menu-item-active': active
    })

    return (
        <div 
            className={classes}
            onClick={handleClick}
        >
            <span>{route.name}</span>
        </div>
    )
}

export const SideMenu = (props) => {
    const { routes } = props;
    const filtredRoutes = routes.filter((route) => !!route.name);
    const { pathname } = useLocation();
    const history = useHistory();

    const handleClick = () => {
        history.push(URLS.HOME);
    }

    return (
        <div className="side-menu">
            <h1 
                className="side-menu-title"
                onClick={handleClick}
            >
                GALLEY
            </h1>
            {
                filtredRoutes.map((route, i) => 
                    <MenuItem 
                        key={i} 
                        route={route}
                        active={route.path === pathname} 
                    />
                )
            }
            <div className="picture">
                <img src={incvisitionPng} alt="инквизитор"/>
            </div>
        </div>
    )
}