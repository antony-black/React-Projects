import Task from "../Task/Task";
import styles from "./TaskList.module.css";

export default function TaskList({
  tasks,
  // removeTask,
  // editTAsk,
  // moveUpper,
  // moveLower,
}) {
  const removeTask = (index) => {
    setTasks((prevTask) => {
      const updatedTasks = tasks.filter((_, i) => index !== i);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const moveUpper = (index) => {
    const updatedTasks = [...tasks];
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
    }
    setTasks(updatedTasks);
  };

  const moveLower = (index) => {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
    }
    setTasks(updatedTasks);
  };

  return (
    <ul className={styles.taskList}>
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <Task
            key={task}
            task={task}
            removeTask={removeTask}
            editTAsk={editTAsk}
            moveUpper={moveUpper}
            moveLower={moveLower}
          />
        ))}
    </ul>
  );
}
