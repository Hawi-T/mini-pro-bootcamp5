import { useTasks } from "../store/taskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
