import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
