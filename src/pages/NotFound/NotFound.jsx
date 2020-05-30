import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";

export const NotFound = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Пууустооо...'))
    }, []);

    return (
        <div className="not-found">
            404
        </div>
    )
}