import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  return (
    <>
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskBoard;
