import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

const MenuItem = (props) => {
    const { route } = props;
    const history = useHistory();

    const handleClick = () => {
        history.push(route.path);
    }

    return (
        <div 
            className="side-menu-item"
            onClick={handleClick}
        >
            <span>{route.name}</span>
        </div>
    )
}

export const SideMenu = (props) => {
    const { routes } = props;
    const filtredRoutes = routes.filter((route) => !!route.name);

    return (
        <div className="side-menu">
            {
                filtredRoutes.map((route, i) => 
                    <MenuItem key={i} route={route} />
                )
            }
        </div>
    )
}