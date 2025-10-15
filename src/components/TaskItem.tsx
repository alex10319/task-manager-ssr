import { type Task } from "../interfaces/Tasks.interfaces";

interface TaskItemProps {
  task: Task;
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.title} ({task.priority})
    </li>
  );
};