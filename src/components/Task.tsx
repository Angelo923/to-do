import {ITaskform} from "../CreateUpdate/iterface.ts";
import {CgTrash} from "@react-icons/all-files/cg/CgTrash";
import styles from  './Task.module.css'
import { v4 as uuidv4 } from 'uuid';



const Task = ({content}: ITaskform) => {
    const taskId = uuidv4();
    return (
        <>
            <div className={styles.taskFather}>
                <div>
                    <input className={styles.inputRadio}
                           type={"radio"}></input>
                </div>
                <div className={styles.taskContainer}>
                    <p>{content}</p>
                </div>
                <div className={styles.deleteTask}>
                    <button title="Deletar tarefa">
                        <CgTrash size={24}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task;