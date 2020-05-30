import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";

export const Rating = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Показатель гребли'))
    }, []);

    return (
        <div className="rating">
            Показатель гребли
        </div>
    )
}