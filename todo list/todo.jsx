import React from "react";
import "./todo.css";
import { useState ,useEffect} from "react";
import { TiTickOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const todo = () => {
    const todokey = "savetodo";
  const [value, setValue] = useState({});

  const [tasks, setTask] = useState(()=>{
    const initialtodo = localStorage.getItem(todokey);
    if(!initialtodo) return [];
    return JSON.parse(initialtodo);
  });

  const [datetime, setdatetime] = useState("");


   setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setdatetime(`${date}-${time}`);
    }, 1000);
  


  



  const handleinputchange = (value)=>{
    setValue({id:value,content:value,checked:false});
  }

  const handleformclick = (event) => {
    const {id,content,checked} = value
    event.preventDefault();

    if (!content) return;


    const sametask = tasks.find(
        (currenttask) => currenttask.content === content
    )
    if (sametask) {
        setValue({id:"",content:"",checked:false});
      return;
    }

    setTask([...tasks, {id:id,content:content,checked:checked}]);
    setValue({id:"",content:"",checked:false});
  };





  const deletebuttonevent = (task) => {
    const newtasksarray = tasks.filter((currenttask) => {
      return currenttask != task;
    });

    setTask(newtasksarray);
  };

  const tickevent=(currenttask)=>{
    currenttask.checked = !currenttask.checked
  }

  localStorage.setItem(todokey,JSON.stringify(tasks))

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{datetime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleformclick}>
          <div>
            <input
              value={value.content}
              type="text"
              autoComplete="off"
              className="todo-input"
              onChange={(event) => handleinputchange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {tasks.map((currenttask) => {
            return (
              <li key={currenttask.id} className="todo-item">
                <span className={currenttask.checked? "checkList":"notCheckList"}>{currenttask.content}</span>
                <div className="operationbuttons">
                  <button className="check-btn" onClick={()=>tickevent(currenttask)}>
                    <TiTickOutline />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deletebuttonevent(currenttask)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clearall" onClick={() => setTask([])}>
          CLEAR ALL
        </button>
      </section>
    </section>
  );
};

export default todo;
