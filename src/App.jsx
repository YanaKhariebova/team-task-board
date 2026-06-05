import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
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

export default App;
