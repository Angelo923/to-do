import {ITaskform} from "../CreateUpdate/iterface.ts";
import {CgTrash} from "@react-icons/all-files/cg/CgTrash";
import styles from  './Task.module.css'


const Task = (props: ITaskform) => {
    return (
        <>
            <div>
                <input className={styles.inputRadio}
                    type={"radio"}></input>
            </div>
            <div className={styles.taskContainer}>
                <p>CONSEGUIR FAZER A PORRA DO DESAFIO 1</p>
            </div>
            <div className={styles.deleteTask}>
               <button title="Deletar tarefa">
                   <CgTrash size={24}/>
               </button>
            </div>
        </>
    );
};

export default Task;