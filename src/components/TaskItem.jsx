import { useTasks } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span>{task.text}</span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default TaskItem;
