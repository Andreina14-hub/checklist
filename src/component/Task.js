import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';



const Task = ({ task, toggleComplet, editTask, removeTask }) => {
    const [editingTask, setEditTask] = useState(false);
    const [newTask, setNewTask] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(task.id, newTask);
        setEditTask(false);
    }
    return (
        <li className="list-tasks-task">
            <FontAwesomeIcon
                icon={task.complet ? faCheckSquare : faSquare}
                className="list-task-icon list-tasks-task-check"
                onClick={() => toggleComplet(task.id)}
            />
            <div className="list-task-text">
                {editingTask ? (
                    <form action="" className="form-edit-task" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-edit-task-input"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button type="submit" className="form-edit-task-btn">
                            Actualizar
                        </button>
                    </form>
                ) : (
                    <span className="list-task-text-editable" onClick={() => setEditTask(true)}>
                        {task.text}
                    </span>
                )}
            </div>
            {/* Conditionally render icons based on editing state */}
            {!editingTask && (
                <div className="list-task-content-btn">
                    <FontAwesomeIcon
                        icon={faEdit}
                        className="list-task-icon list-tasks-edit"
                        onClick={() => setEditTask(true)}
                    />
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="list-task-icon list-tasks-edit"
                        onClick={() => removeTask(task.id)}
                    />
                </div>
            )}
        </li>
    );
};

export default Task;
