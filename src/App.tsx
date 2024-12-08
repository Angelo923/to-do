import './global.css';
import styles from './App.module.css';
import Task from "./components/Task.tsx";
import toDoLogo from "./assets/Logo.svg";
import {CgAdd} from "@react-icons/all-files/cg/CgAdd";

const App = () => {
    return (
    <>
        <header className={styles.header}>
            <img src={toDoLogo} alt="logo"/>
        </header>
        <div className={styles.taskSubmit}>
            <form>
                <input
                    type={'text'}
                    placeholder="Adicione uma nova tarefa"
                >
                </input>
            </form>
            <button className={styles.buttonTask} type="submit">
                Criar <CgAdd size={24} />
            </button>
        </div>
        <div className={styles.taskArea}>
            <header className={styles.taskList}>
                <div>
                    Tarefas criadas
                </div>
                <div>
                    Tarefas Concluídas
                </div>
            </header>
            <div className={styles.taskRow}>
                <Task
                    id="1ab"
                    content="Fazer o Desafio - 01"
                />
                <Task
                    id="1ab"
                    content="Fazer o Desafio - 01"
                />
            </div>

        </div>


    </>
    );
};

export default App;