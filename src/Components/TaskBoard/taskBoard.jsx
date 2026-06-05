import { Header } from "../Layouts/header/header";
import { useState } from "react";

export function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const totalTasks = tasks.length;
  const finishedTasks = tasks.filter((task) => task.status === "done").length;

  return (
    <>
      <Header totalTasks={totalTasks} finishedTasks={finishedTasks} />

      {/* <TaskForm />
      <FilterBar />
      <TaskList /> */}
    </>
  );
}
