import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { LOAD_STATUSES } from "../../shared/constants";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { BoardActions } from "../../store/board/board.actions";

export const Tasks = () => {
    const dispatch = useDispatch();
    const { tasks, loadStatus, signal } = useSelector((state) => state.board);

    useEffect(() => {
        dispatch(NavbarActions.setTitle('Доска с карточками'));
        dispatch(BoardActions.fetchTasks(true));
    }, []);
    
    useEffect(() => {
        if (signal) {
            dispatch(BoardActions.fetchTasks());
            dispatch(BoardActions.setSignalFetch(false));
        }
    }, [signal]);

    return (
        <div className="tasks">
            Доска с карточками
        </div>
    )
}