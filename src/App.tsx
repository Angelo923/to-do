import './global.css';
import styles from './App.module.css';
import Task from "./components/Task.tsx";
import toDoLogo from "./assets/Logo.svg";
import clipBoard from "./assets/Clipboard.svg"
import {CgAdd} from "@react-icons/all-files/cg/CgAdd";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const App = () => {
    const [tasks, setTasks] = useState([''])

    const [newTask, setNewTask] = useState('');

    const taskId = uuidv4();

    function handleCreateNewtask () {
        event.preventDefault();
        
        setTasks([...tasks, newTask]);
        setNewTask('');

    }

    function handleNewTaskChange() {
        setNewTask(event.target.value);
    }

    return (
        <>
            <header className={styles.header}>
                <img src={toDoLogo} alt="logo"/>
            </header>
            <div className={styles.taskSubmit}>
                <form
                    onSubmit={handleCreateNewtask}
                >
                    <input className={styles.inputForm}
                           type='text'
                           name='inputTask'
                           placeholder="Adicione uma nova tarefa"
                           value={newTask}
                           onChange={handleNewTaskChange}
                    />
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
            </div>
            <div className={styles.taskArea2}>
                {tasks.map(task => {
                    return <Task
                        content={task}
                        id={taskId}
                    />
                })}
            </div>
            <div className={styles.clipBoard}>
                <img src={clipBoard} alt="clipboard"/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>

            </div>

        </>
    );
};

export default App;