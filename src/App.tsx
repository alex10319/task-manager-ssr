import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { FilterPanel } from "./components/FilterPanel";
import { Summary } from "./components/Summary";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Task Manager SSR</h1>
      <TaskForm />
      <hr />
      <FilterPanel />
      <TaskList tasks={[]} />
      <Summary total={0} completed={0} />
    </div>
  );
}

export default App;
