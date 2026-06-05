import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("open");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Bitte gib einen Titel für die Aufgabe ein!");
      return;
    }

    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      assignee: assignee.trim() || "Nicht zugewiesen",
      status: status,
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("open");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6 border border-gray-200"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        Neue Aufgabe hinzufügen
      </h3>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Titel <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="z. B. Design erstellen"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Beschreibung
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Was ist zu tun?..."
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Verantwortliche Person
        </label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Name des Teammitglieds"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="open">Offen</option>
          <option value="in-progress">In Bearbeitung</option>
          <option value="done">Erledigt</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Aufgabe hinzufügen
      </button>
    </form>
  );
}
