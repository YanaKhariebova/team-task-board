const FilterBar = ({ filter, setFilter }) => {
  const baseBtn =
    "px-3 py-1 rounded border text-sm transition hover:bg-gray-200";

  const activeBtn = "bg-black text-white";

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className={`${baseBtn} ${filter === "all" ? activeBtn : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={`${baseBtn} ${filter === "open" ? activeBtn : ""}`}
        onClick={() => setFilter("open")}
      >
        Open
      </button>

      <button
        className={`${baseBtn} ${filter === "in-progress" ? activeBtn : ""}`}
        onClick={() => setFilter("in-progress")}
      >
        In Progress
      </button>

      <button
        className={`${baseBtn} ${filter === "done" ? activeBtn : ""}`}
        onClick={() => setFilter("done")}
      >
        Done
      </button>
    </div>
  );
};

export default FilterBar;