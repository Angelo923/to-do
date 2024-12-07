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
            <button type="submit">
                Criar <CgAdd />
            </button>
        </div>
        <main className={styles.taskArea}>
            <div className={styles.taskCreated}>
                Tarefas criadas
            </div>
            <div className={styles.taskFinished}>
                Tarefas Concluídas
            </div>
        </main>

        <footer>
            <Task
                id="1ab"
                content="Fazer o Desafio - 01"
            />
        </footer>

    </>
    );
};

export default App;