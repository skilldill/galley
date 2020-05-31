import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { LOAD_STATUSES } from "../../shared/constants";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { BoardActions } from "../../store/board/board.actions";
import { TasksList, FormTask } from "./components"

export const Tasks = () => {
    const [currentStatus, setCurrentStatus] = useState(0);
    const [showCreateForm, setShowCreateForm] = useState(false);

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

    const handleCloseForm = () => {
        setShowCreateForm(false);
    }

    const handleOpenForm = (status) => {
        setCurrentStatus(status)
        setShowCreateForm(true);
    }

    return (
        <div className="tasks">
            {
                !!tasks && (
                    <div className="tasks-columns">
                        <TasksList statusId={0} tasks={tasks} onCreateTask={handleOpenForm} />
                        <TasksList statusId={1} tasks={tasks} onCreateTask={handleOpenForm} />
                        <TasksList statusId={2} tasks={tasks} onCreateTask={handleOpenForm} />
                        <TasksList statusId={3} tasks={tasks} onCreateTask={handleOpenForm} />
                    </div>
                )
            }
            {
                showCreateForm && 
                <FormTask 
                    status={currentStatus}
                    onClose={handleCloseForm}
                />}
        </div>
    )
}