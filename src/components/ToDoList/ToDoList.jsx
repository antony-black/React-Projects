import { useEffect, useState } from "react";
import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editionIndex, setEditioIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prevTask) => {
        const updatedTasks = [...tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks((prevTask) => {
      const updatedTasks = tasks.filter((_, i) => index !== i);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const editTask = (index) => {
    setEditioIndex(index);
    const updatedTasks = [...tasks];
    setNewTask(updatedTasks[index]);
    setEdit(true);
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

  useEffect(() => {
    const todos = localStorage.getItem("tasks");
    if (todos) {
      setTasks(JSON.parse(todos));
    }
  }, []);

  return (
    <div className={styles.toDOList}>
      <h1 className={styles.header}>Task List</h1>
      <TaskForm
        addTask={addTask}
        editionIndex={editionIndex}
        isEdit={isEdit}
        setEdit={setEdit}
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <ul>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <li key={index}>
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
                  onClick={() => editTask(index)}
                >
                  EDIT
                </button>
                <button
                  className={styles.upper}
                  onClick={() => moveUpper(index)}
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
