import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "react-charts";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { ChartActions } from "../../store/chart/chart.actions";

export const Rating = () => {
    const dispatch = useDispatch();
    const { data, signal } = useSelector((state) => state.chart);

    useEffect(() => {
        dispatch(NavbarActions.setTitle('Показатель гребли'));
        dispatch(ChartActions.fetchChartData(100));
    }, []);

    useEffect(() => {
        if (signal) {
            dispatch(ChartActions.fetchChartData(100));
            dispatch(ChartActions.setSignal(false));
        }
    }, [signal])

    const axes = [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' },
    ]

    return (
        <div className="rating">
           
            { 
                !!data.length && (
                    <div className="chart-holder">
                        <Chart data={data} axes={axes} tooltip />
                    </div>
                )
            }
        </div>
    )
}