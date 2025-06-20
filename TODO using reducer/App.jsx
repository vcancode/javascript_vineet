import { useReducer, useState } from "react";
import "./App.css";
import Task from "./components/task"




function App() {
  const initialtasks = []; // array of objects
  function reducer(tasks, action) {
  switch (action.type) {
    case "add": {
      const name = action.newtask;
      return [...tasks, { name, id: Date.now(), complete: false }];
    }

    case "done":
      return tasks.map((task) =>{
          if(task.id==action.id){
            return {...task,complete:!task.complete};
          }

          return task;
      }
        
      );

    case "delete":
      return tasks.filter(
        (task) => task.id !== action.id
      );

    default:
      return tasks;
  }
}
  const [tasks,dispatch] = useReducer(reducer,initialtasks);
  const [value,setValue] = useState("");
 function handlesubmit(e){
    e.preventDefault();
    dispatch({type:"add", newtask:value});
    setValue("")
 }


  return (
    
   <div className="todo" >
        <h1>Todo List</h1>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter your task" className="input-todo" value = {value} onChange={(e)=>setValue(e.target.value)}/>
          <button type="Submit" className="Add-button">
            ADD
          </button>
        </form>
        <div className="task-div-main">
          {
            tasks.map(
              (task)=>{
                return <Task dispatch={dispatch} key ={task.id} task={task}/>
              }
            )
          }
        </div>
   </div>
    
  );
}

export default App;
