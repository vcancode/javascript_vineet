import { useReducer, useState } from "react";
import "./App.css";
import Task from "./components/task";

function App() {
  const initialState = {
    tasks: [],
    filter: "all",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "add": {
        const name = action.newtask;
        const newTask = { name, id: Date.now(), complete: false };
        return { ...state, tasks: [...state.tasks, newTask] };
      }

      case "done": {
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.id ? { ...task, complete: !task.complete } : task
        );
        return { ...state, tasks: updatedTasks };
      }

      case "delete": {
        const filteredTasks = state.tasks.filter((task) => task.id !== action.id);
        return { ...state, tasks: filteredTasks };
      }

      case "setFilter":
        return { ...state, filter: action.filter };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    dispatch({ type: "add", newtask: value });
    setValue("");
  }

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.complete;
    if (state.filter === "uncompleted") return !task.complete;
    return true;
  });

  return (
    <div className="todo">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          className="input-todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="Add-button">
          ADD
        </button>
      </form>

      <div className="filter-btns">
        <button className="filter-btn" onClick={() => dispatch({ type: "setFilter", filter: "all" })}>
          ALL
        </button>
        <button className="filter-btn" onClick={() => dispatch({ type: "setFilter", filter: "completed" })}>
          COMPLETED
        </button>
        <button className="filter-btn" onClick={() => dispatch({ type: "setFilter", filter: "uncompleted" })}>
          UNCOMPLETED
        </button>
      </div>

      <div className="task-div-main">
        {filteredTasks.map((task) => (
          <Task dispatch={dispatch} key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
