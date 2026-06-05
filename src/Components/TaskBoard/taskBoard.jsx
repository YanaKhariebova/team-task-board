import { Header } from "../Layouts/header/header";
import { useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "./../TaskList/TaskList";

export function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;
  const finishedTasks = tasks.filter((task) => task.status === "done").length;

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  const [filter, setFilter] = useState("all");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // LOAD API
  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      setError("");

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );

        const data = await res.json();

        const formatted = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          description: "Imported task",
          assignee: "Demo User",
          status: todo.completed ? "done" : "open",
        }));

        setTasks(formatted);
      } catch (error) {
        console.error(error);
        setError("Failed to load tasks");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // DELETE
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // STATUS CHANGE
  const changeStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        if (task.status === "open") return { ...task, status: "in-progress" };
        if (task.status === "in-progress") return { ...task, status: "done" };

        return { ...task, status: "open" };
      }),
    );
  };

  // FILTER
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  // LOADING / ERROR
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <>
      <Header totalTasks={totalTasks} finishedTasks={finishedTasks} />
      <TaskForm addTask={addTask} />
      <div className="max-w-3xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center">Team Task Board</h1>

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onStatusChange={changeStatus}
        />
      </div>
      {/* <TaskForm />
      <FilterBar />
      <TaskList /> */}
    </>
  );
}
