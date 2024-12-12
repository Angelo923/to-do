import {ITaskform} from "../CreateUpdate/interface.ts";
import {CgTrash} from "@react-icons/all-files/cg/CgTrash";
import styles from './Task.module.css';

const Task = ({content, onDeleteTask, completed, onToggleComplete}: ITaskform) => {
    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleCompletedTask() {
        onToggleComplete(content);
        console.log(completed)
    }

    return (
        <>
            <div className={styles.taskFather}>
                <div>
                    <input
                        onClick={handleCompletedTask}
                        className={styles.inputCheckBox}
                        type="checkbox"
                        title="Concluir Tarefa"
                        checked={completed}
                    />
                </div>
                <div className={styles.taskContainer}>
                    <p className={styles.taskContent}>
                        {content}
                    </p>
                </div>
                <div className={styles.deleteTask}>
                    <button onClick={handleDeleteTask} title="Deletar tarefa">
                        <CgTrash size={24}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task;
