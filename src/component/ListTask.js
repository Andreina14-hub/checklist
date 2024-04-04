import React from "react";
import Task from "./Task";

const ListTask = ({ tasks, seTasks, showComplet }) => {
    const toggleComplet = (id) => {
        seTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, complet: !task.complet }
            }
            return task;
        }));
    }

    const editTask = (id, newText) => {
        seTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, text: newText }
            }
            return task;
        }));
    }

    const removeTask = (id) => {
        seTasks(tasks.filter((task) => {
            if (task.id !== id) {
                return task;
            }
            return false;
        }));
    }

    return (
        <ul className="list-group">
            {tasks.length > 0 ? tasks.map((task) => {
                if (showComplet) {
                    return <Task
                        key={task.id}
                        task={task}
                        toggleComplet={toggleComplet}
                        editTask={editTask}
                        removeTask={removeTask} />
                    // Si la tarea no esta completada, la devolvemos.
                } else if (!task.complet) {
                    return <Task
                        key={task.id}
                        task={task}
                        toggleComplet={toggleComplet}
                        editTask={editTask}
                        removeTask={removeTask}
                    />
                }  // Si ya esta completada no la devolvemos    
                return null;
            })
                : <div className="list-task-msj"> 'No hay tareas'</div>}
        </ul>
    );
}
export default ListTask;