import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { ChartActions } from "../../store/chart/chart.actions";

export const Rating = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Показатель гребли'));
        dispatch(ChartActions.fetchChartData(10));
    }, []);

    return (
        <div className="rating">
            Показатель гребли
        </div>
    )
}