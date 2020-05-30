import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";

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

    const changeTask = async (status) => {
        try {
            await ApiService.changeTask({
                ...task,
                status: status
            })

            dispatch(BoardActions.fetchTasks());
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleClickNext = () => {
        changeTask(task.status + 1);
    }

    const handleClickRemove = () => {
        changeTask(4);
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
                    type="dashed"
                >
                    {btnNextStatusText()}
                </Button>
                <Button 
                    danger
                    type="dashed"
                    icon={<DeleteOutlined />} 
                    onClick={handleClickRemove}
                />
            </div>
        </div>
    )
}