import './global.css';
import styles from './App.module.css';
import Task from "./components/Task.tsx";
import toDoLogo from "./assets/Logo.svg";
import clipBoard from "./assets/Clipboard.svg"
import {CgAdd} from "@react-icons/all-files/cg/CgAdd";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ITaskform} from "./CreateUpdate/iterface.ts";

const taskId = uuidv4();

const App = () => {
    const [tasks, setTasks] = useState<ITaskform[]>([])
    const [newTask, setNewTask] = useState('');

    function handleCreateNewtask () {
        event.preventDefault();

        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleNewTaskChange() {
        setNewTask(event.target.value);
    }

    function deleteTask (taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(tasks => {
            return tasks !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
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
                        Tarefas criadas <span>{tasks.length}</span>
                    </div>
                    <div className={styles.taskFinished}>
                        Tarefas Concluídas <span>{tasks.length}</span>
                    </div>
                </header>
                </div>
            {tasks.length > 0 ? (
                <div className={styles.taskArea2}>
                    {tasks.map(task => (
                        <Task
                            id={task}
                            key={task}
                            content={task}
                            onDeleteTask={deleteTask}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.clipBoard}>
                    <img src={clipBoard} alt="clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
        </>
    );
};

export default App;