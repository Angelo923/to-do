import './global.css';
import styles from './App.module.css';
import Task from "./components/Task.tsx";
import toDoLogo from "./assets/Logo.svg";
import clipBoard from "./assets/Clipboard.svg"
import {CgAdd} from "@react-icons/all-files/cg/CgAdd";
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ITaskform} from "./CreateUpdate/interface.ts";

const App = () => {
    const [tasks, setTasks] = useState<ITaskform[]>([])
    const [newTask, setNewTask] = useState('');
    const [completedTasksCount, setCompletedTasksCount] = useState(0);



    function handleCreateNewtask (event: React.FormEvent) {
        event.preventDefault();

        // Adiciona um objeto de tarefa com id
        const taskWithId = {
            id: uuidv4(), // Gera um ID único
            content: newTask, // Supondo que sua interface tenha um campo 'content'
            completed: false,
        };

        setTasks([...tasks, taskWithId]);
        setNewTask('');
    }

    function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function updateCompletedTasksCount(updatedTasks) {
        const completedTasks = updatedTasks.filter(task => task.completed);
        setCompletedTasksCount(completedTasks.length);
    }

    function deleteTask(taskToDelete: ITaskform) {
        const tasksWithoutDeletedOne = tasks.filter(task =>
            task.id !== taskToDelete.id // Filtra pelo ID
        );

        setTasks(tasksWithoutDeletedOne);
        updateCompletedTasksCount(tasksWithoutDeletedOne); // Atualiza a contagem de tarefas concluídas
    }

    function toggleCompleteTask(taskToToggle: ITaskform) {
        const updatedTasks  = tasks.map(task =>
            task.id === taskToToggle.id ? {...task, completed: !task.completed} : task );
        setTasks(updatedTasks);

        // Update the completed tasks count
        const completedTasks = updatedTasks.filter(task => task.completed);
        setCompletedTasksCount(completedTasks.length);
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
                        Tarefas Concluídas <span>{tasks.length > 0
                        ? `${completedTasksCount} de ${tasks.length}`
                        : completedTasksCount}</span>
                    </div>
                </header>
                </div>
            {tasks.length > 0 ? (
                <div className={styles.taskArea2}>
                    {tasks.map(task => (
                        <Task
                            key={task.id}
                            content={task.content}
                            onDeleteTask={() => deleteTask(task)}
                            onToggleComplete={()=> toggleCompleteTask(task)}

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