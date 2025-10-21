import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { FilterPanel } from "./components/FilterPanel";
import { Summary } from "./components/Summary";
import { getTasks } from "./api/tasks";
import { useEffect, useState } from "react";
import type { Task } from "./interfaces/Tasks.interfaces";

function App() {
  const [data, setData] = useState<Task[]>([])

  const handleFetchTask = async () => {
    const res = await getTasks()

    if (!res) {
      return
    }

    setData(res)
  }

  useEffect(() => {
    handleFetchTask()
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Task Manager SSR</h1>
      <TaskForm />
      <hr />
      <FilterPanel />
      <TaskList tasks={data} />
      <Summary total={0} completed={0} />
    </div>
  );
}

export default App;
