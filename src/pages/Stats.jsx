import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="container">
      <h2>Task Statistics</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {remaining}</p>
    </div>
  );
};

export default Stats;
