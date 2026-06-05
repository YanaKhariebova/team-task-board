import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "open",
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    onAddTask({
      id: Date.now(),
      ...form,
    });

    setForm({
      title: "",
      description: "",
      assignee: "",
      status: "open",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-700 p-3 rounded-lg shadow-md flex flex-col gap-2"
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 rounded w-full"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded w-full"
      />

      <input
        name="assignee"
        value={form.assignee}
        onChange={handleChange}
        placeholder="Assignee"
        className="border bg-gray-100/50 p-2 rounded w-full"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      >
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-500"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;