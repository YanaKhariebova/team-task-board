export function Header({ totalTasks, finishedTasks }) {
  return (
    <>
      <div className="hero bg-base-200 rounded-box mb-6">
        <div className="hero-content text-center flex flex-col gap-4 items-center m-4 p-4">
          <h1 className="text-4xl">Team Task Board</h1>
          <p className="text-xl">
            Organize and administrate the tasks of your team
          </p>
          <p>
            All Tasks: {totalTasks} | Tasks to finish: {finishedTasks}
          </p>
        </div>
      </div>
    </>
  );
}
