import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, onDelete, onStatusChange }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-center mt-6">No tasks available.</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
