import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import FormTask from './component/FormTask';
import ListTask from './component/ListTask';

const App = () => {
    // Obtenemos las tasks guardadas de localstorage.
    const taskSave =
        localStorage.getItem('tasks') ?
            JSON.parse(localStorage.getItem('tasks')) : [];
    // Establecemos el estado de las tasks.
    const [tasks, seTasks] = useState(taskSave);
    // Guardando el estado dentro de localstorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    // Accedemos a localstorage y comprobamos si ShowComplet es null
    let configShowComplet = '';
    if (localStorage.getItem('showComplet') === null) {
        configShowComplet = true;
    } else {
        configShowComplet = localStorage.getItem('showComplet') === 'true';
    }

    // El estado de ShowComplet
    const [showComplet, setShowComplet] = useState(configShowComplet);

    useEffect(() => {
        localStorage.setItem('showComplet', showComplet.toString());
    }, [showComplet]);

    return (
        <div className="contenedor">
            <Header
                showComplet={showComplet}
                setShowComplet={setShowComplet}
            />
            <FormTask tasks={tasks} seTasks={seTasks} />
            <ListTask
                tasks={tasks}
                seTasks={seTasks}
                showComplet={showComplet}
            />
        </div>
    );
}
export default App; 