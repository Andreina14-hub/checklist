import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';  // generate a random
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormTask = ({ tasks, seTasks }) => {
    const [taskName, setTaskName] = useState("");

    const handleInput = (e) => {
        setTaskName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        seTasks(
            [
                ...tasks,
                {
                    id: uuidv4(),
                    text: taskName,
                    done: false
                }
            ]
        );
        setTaskName('');
    }
    return (
        <form action=""
            className="form-task"
            onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-task-input"
                placeholder="Enter task name..."
                value={taskName}
                onChange={(e) => handleInput(e)} />
            <button
                type="submit"
                className="form-task-btn">
                <FontAwesomeIcon icon={faPlusSquare}
                    className="form-task-icon-btn" />
            </button>
        </form >
    )
}
export default FormTask;