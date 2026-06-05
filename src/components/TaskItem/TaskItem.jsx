const TaskItem = ({ task, onDelete, onStatusChange }) => {
  const { id, title, description, assignee, status } = task;

  const statusColor =
    status === "open"
      ? "bg-red-500"
      : status === "in-progress"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>

        <span className={`text-white text-xs px-2 py-1 rounded ${statusColor}`}>
          {status}
        </span>
      </div>

      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">
        <strong>Assignee:</strong> {assignee}
      </p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onStatusChange(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Change Status
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;