import { useState } from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks);
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
    <div className={styles.toDOList}>
      <h1 className={styles.header}>Task List</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Enter a new task..."
          className={styles.taskInput}
        />
        <button className={styles.add} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <li key={task}>
              <span className={styles.taskText}>
                {index + 1}. {task}
              </span>
              <div className={styles.options}>
                <button
                  className={styles.remove}
                  onClick={() => removeTask(index)}
                >
                  REMOVE
                </button>
                <button
                  className={styles.remove}
                  onClick={() => removeTask(index)}
                >
                  EDIT
                </button>
                <button
                  className={styles.upper}
                  onClick={() => editTask(index)}
                >
                  ☝️
                </button>
                <button
                  className={styles.lower}
                  onClick={() => moveLower(index)}
                >
                  👇
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
