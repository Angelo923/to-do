import './global.css';
import styles from './App.module.css';
import Task from "./components/Task.tsx";
import toDoLogo from "./assets/Logo.svg";
import {CgAdd} from "@react-icons/all-files/cg/CgAdd";
import {useState} from "react";

const App = () => {
    const tasks = useState([
        1,
        2,
    ])
    function handleCreateNewtask () {
        event.preventDefault()
        tasks.push(3);

        console.log(tasks);
    }
    return (
    <>
        <header className={styles.header}>
            <img src={toDoLogo} alt="logo"/>
        </header>
        <div className={styles.taskSubmit}>
            <form onSubmit={handleCreateNewtask}>
                <input className={styles.inputForm}
                       type='tex'
                       placeholder="Adicione uma nova tarefa"
                >
                </input>
                <button className={styles.buttonTask} type="submit">
                    Criar <CgAdd size={24}/>
                </button>
            </form>

        </div>
        <div className={styles.taskArea}>
            <header className={styles.taskList}>
                <div className={styles.taskCreated}>
                    Tarefas criadas
                </div>
                <div className={styles.taskFinished}>
                    Tarefas Concluídas
                </div>
            </header>
            <div className={styles.taskRow}>
                {tasks.map(task => {
                    return <Task />
                })}
            </div>

        </div>


    </>
    );
};

export default App;