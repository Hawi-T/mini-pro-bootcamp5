import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="container">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
