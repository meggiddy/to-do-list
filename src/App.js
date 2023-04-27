import "./App.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";

function App() {
  const [newTask, setNewTask] = useState({
    title: "",
    deadline: "",
    time: "",
    status: "incomplete",
  });

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React project",
      deadline: "2023-05-01",
      time: "9:00AM",
      status: "incomplete",
    },
    {
      id: 2,
      title: "Go to the gym",
      deadline: "2023-04-28",
      time: "6:00AM",
      status: "incomplete",
    },
    {
      id: 3,
      title: "Buy groceries",
      deadline: "2023-04-29",
      time: "12:00PM",
      status: "complete",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, newTask]);

    setNewTask({
      id: newTask.id + 1,
      title: "",
      deadline: "",
      time: "",
      status: "incomplete",
    });
  };

  return (
    <div className="App">
      <AddTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
