import styles from "./Task.module.css";

export default function Task({
  task,
  removeTask,
  editTAsk,
  moveUpper,
  moveLower,
}) {
  return (
    <li key={task}>
      <span className={styles.taskText}>
        {index + 1}. {task}
      </span>
      <div className={styles.options}>
        <button className={styles.remove} onClick={() => removeTask(index)}>
          REMOVE
        </button>
        <button className={styles.remove} onClick={() => editTAsk(index)}>
          EDIT
        </button>
        <button className={styles.upper} onClick={() => moveUpper(index)}>
          ☝️
        </button>
        <button className={styles.lower} onClick={() => moveLower(index)}>
          👇
        </button>
      </div>
    </li>
  );
}
