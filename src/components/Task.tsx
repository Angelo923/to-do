import {ITaskform} from "../CreateUpdate/iterface.ts";
import {CgTrash} from "@react-icons/all-files/cg/CgTrash";
import styles from  './Task.module.css'



const Task = ({content, onDeleteTask}: ITaskform) => {
    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleCompletedTask() {

    }

    return (
        <>
            <div className={styles.taskFather}>
                <div>
                    <input
                        onClick={handleCompletedTask}
                        className={styles.inputCheckBox}
                        type={"checkbox"}
                        title="Selecionar Tarefa"
                    >

                    </input>
                </div>
                <div className={styles.taskContainer}>
                    <p>{content}</p>
                </div>
                <div className={styles.deleteTask}>
                    <button onClick={handleDeleteTask}
                        title="Deletar tarefa">
                        <CgTrash size={24}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task;