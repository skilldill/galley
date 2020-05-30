import React from "react";

import "./style.scss";
import { TASK_STATUSES } from "../../../../shared/constants";
import { Task } from "../Task";

export const TasksList = (props) => {
    const { statusId, tasks } = props;
    const statusText = TASK_STATUSES[statusId];
    const currentTasks = tasks.filter((task) => task.status === statusId);

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

        return <p>Нет задач в статусе {statusText}</p>
    }

    return (
        <div className="tasks-list">
            <h3 className="tasks-list-title">{statusText}</h3>
            <div className="tasks">
                {renderTasks()}
            </div>
        </div>
    )
}