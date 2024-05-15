import styles from "./TaskForm.module.css";

export default function TaskForm({
  addTask,
  newTask,
  setNewTask,
  editionIndex,
  isEdit,
  setEdit,
  tasks,
  setTasks,
}) {
  const handleEdition = () => {
    const updatedTasks = [...tasks];
    setTasks((prevTask) => {
      updatedTasks[editionIndex] = newTask;
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    cancel();
  };

  const handleCancel = () => {
    setEdit(false);
    setNewTask("");
  };
  return (
    <form onSubmit={addTask}>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        placeholder="Enter a new task..."
        className={styles.taskInput}
      />
      {!isEdit ? (
        <button className={styles.add} onClick={addTask}>
          Add Task
        </button>
      ) : (
        <>
          <button className={styles.add} onClick={handleEdition}>
            Edit Task
          </button>
          <button className={styles.add} onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
}
// export default function EditForm({
//   addTask,
//   newTask,
//   setNewTask,
//   editionIndex,
//   setEdit,
//   tasks,
//   setTasks,
// }) {
//   const handleEdition = () => {
//     const updatedTasks = [...tasks];
//     setTasks((prevTask) => {
//       updatedTasks[editionIndex] = newTask;
//       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//       return updatedTasks;
//     });
//     setEdit(false);
//     setNewTask("");
//   };
//   return (
//     <form onSubmit={addTask}>
//       <input
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         type="text"
//         placeholder="Enter a new task..."
//         className={styles.taskInput}
//       />
//       <button className={styles.add} onClick={handleEdition}>
//         Edit Task
//       </button>
//     </form>
//   );
// }
