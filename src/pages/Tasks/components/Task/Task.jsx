import React, { useState } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";

import { Button } from "antd";
import { ApiService } from "../../../../shared/http";
import { BoardActions } from "../../../../store/board/board.actions";

import "./style.scss";

export const Task = (props) => {
    const { task } = props;
    const dispatch = useDispatch();

    const classes = cn({
        'task': true,
    })

    const btnNextStatusText = () => {
        switch(task.status) {
            case 0:
                return "В разработку"
            case 1:
                return "В тестрирование"
            case 2:
                return "Завершить"
        }
    }

    const handleClickNext = async () => {
        try {
            await ApiService.changeTask({
                ...task,
                status: task.status + 1
            })

            dispatch(BoardActions.fetchTasks());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={classes}>
            <h3 className="task-title">Тема: {task.title}</h3>
            <p className="task-description">
                Описание: {task.description}
            </p>
            <div className="controls">
                <Button
                    onClick={handleClickNext}
                >{btnNextStatusText()}</Button>
            </div>
        </div>
    )
}