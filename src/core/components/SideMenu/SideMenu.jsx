import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import cn from "classnames";

import "./style.scss";

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

    return (
        <div className="side-menu">
            {
                filtredRoutes.map((route, i) => 
                    <MenuItem 
                        key={i} 
                        route={route}
                        active={route.path === pathname} 
                    />
                )
            }
        </div>
    )
}