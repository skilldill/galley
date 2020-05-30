import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { LOAD_STATUSES } from "../../shared/constants";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { BoardActions } from "../../store/board/board.actions";
import { TasksList } from "./components"

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
            {
                !!tasks && (
                    <div className="tasks-columns">
                        <TasksList statusId={0} tasks={tasks} />
                        <TasksList statusId={1} tasks={tasks} />
                        <TasksList statusId={2} tasks={tasks} />
                        <TasksList statusId={3} tasks={tasks} />
                    </div>
                )
            } 
        </div>
    )
}