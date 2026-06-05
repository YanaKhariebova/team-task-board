import { useState } from "react";
import { PublicLayout } from "./Components/Layouts/public.layouts";
import { TaskBoard } from "./Components/TaskBoard/taskBoard";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PublicLayout>
        <TaskBoard />
      </PublicLayout>
    </>
  );
}

export default App;
