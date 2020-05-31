import React from "react";
import { Empty } from "antd";
import { Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

import "./style.scss";
import { TASK_STATUSES } from "../../../../shared/constants";
import { Task } from "../Task";

export const TasksList = (props) => {
    const { statusId, tasks, onCreateTask } = props;
    const statusText = TASK_STATUSES[statusId];
    const currentTasks = tasks.filter((task) => task.status === statusId);
    
    const handleClickCreateTask = () => {
        // В onCreateTask передаём id статуса чтобы было понятно 
        // с каким статутом создавать таску
        !!onCreateTask && onCreateTask(statusId);
    }

    const renderTasks = () => {
        if (!!currentTasks && !!currentTasks.length) {
            return (
                <>
                    {
                        currentTasks.map((task, i) => 
                            <Task key={i} task={task} />
                        )
                    }
                </>
            )
        }

        return <Empty description={`Нет задач в статусе "${statusText}"`}/>
    }

    return (
        <div className="tasks-list">
            <h3 className="tasks-list-title">{statusText}</h3>
            <div className="tasks">
                <div className="controls">
                    <Button
                        size="small"
                        icon={<PlusSquareOutlined />}
                        onClick={handleClickCreateTask}
                    ></Button>
                </div>
                {renderTasks()}
            </div>
        </div>
    )
}