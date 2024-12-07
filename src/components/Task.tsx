import {ITaskform} from "../CreateUpdate/iterface.ts";
import styles from "./Task.module.css"
import cliBoard from "../assets/Clipboard.svg";

const Task = (props: ITaskform) => {
    return (
        <article className={styles.task}>

            <div className={styles.taskContent}>
                <img src={cliBoard} />
            </div>

        </article>
    );
};

export default Task