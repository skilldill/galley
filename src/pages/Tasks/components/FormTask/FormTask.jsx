import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

import "./style.scss";
import { ApiService } from "../../../../shared/http";

export const FormTask = (props) => {
    const [creatingTask, setCreatingTask] = useState(false);
    const { status, onClose } = props;
    const [taskForm] = Form.useForm();
    
    const createTask = async (data) => {
        try {
            setCreatingTask(true);
            await ApiService.createTask(data);
            !!onClose && onClose();
        } catch(error) {
            console.log(error);
        } finally {
            setCreatingTask(false);
        }
    }

    const handleSubmit = (values) => {
        const taskData = { ...values, status };

        if (!!taskData.title.length) {
            createTask(taskData);
        }

        taskForm.resetFields();
    }

    const handleClose = (event) => {
        event.stopPropagation();
        !!onClose && onClose();
    }

    return (
        <div className="backdrop" onClick={handleClose}>
            <div className="form-task" onClick={(event) => event.stopPropagation()}>
                <Form  form={taskForm} onFinish={handleSubmit}>
                    <Form.Item name="title">
                        <Input placeholder="Название" />
                    </Form.Item>
                    <Form.Item name="urgency">
                        <Select placeholder="Срочность">
                            <Select.Option value={0}>Не срочно</Select.Option>
                            <Select.Option value={1}>Срочно</Select.Option>
                            <Select.Option value={2}>Очень срочно</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="description">
                        <Input.TextArea placeholder="Описание..." />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            htmlType="submit" 
                            loading={creatingTask}
                        >Создать</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}