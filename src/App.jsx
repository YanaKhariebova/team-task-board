import { PublicLayout } from "./Components/Layouts/public.layouts";
import { TaskBoard } from "./Components/TaskBoard/taskBoard";

import "./App.css";

function App() {
  return (
    <>
      <PublicLayout>
        <TaskBoard />
      </PublicLayout>
    </>
  );
}

export default App;
