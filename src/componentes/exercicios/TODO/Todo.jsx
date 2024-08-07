import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(
    new Date().toISOString().split("T")[0]
  );
  //   const [newTask, setNewTask] = useState({ title, deadline });

  const handleTaskChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDeadLineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    // if (newTask.trim() !== "") {
    const task = {
      id: Date.now(),
      title,
      completed: false,
      deadline,
    };
    console.log(task);
    setTasks([...tasks, task]);
    setDeadline("");
    setTitle("");
    //   setNewTask({ title: "", deadline: "" });
    // }
  };

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTaskChange}
          placeholder="Digite a sua tarefa"
        />
        <input type="date" value={deadline} onChange={handleDeadLineChange} />
        <button type="submit">Adicionar</button>
      </form>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={task.completed ? { textDecoration: "line-through" } : {}}
            >
              {task.title}
            </span>
            {!task.completed && (
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleTaskComplete(task.id)}
              >
                Complete
              </button>
            )}
            <span style={{ marginLeft: "10px" }}>{task.deadline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
