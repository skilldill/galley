import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";

export const Users = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Гребцы'))
    }, []);

    return (
        <div className="users">
             Гребцы
        </div>
    )
}