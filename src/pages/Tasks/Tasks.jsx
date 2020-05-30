import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";

export const Tasks = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Доска с карточками'))
    }, []);

    return (
        <div className="tasks">
            Доска с карточками
        </div>
    )
}