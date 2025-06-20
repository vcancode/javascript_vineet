import { useRef } from "react";
import "./App.css";



// ! useRef hook

//? use state hook always re renders the components which is good but makes the website less optimised because re render takes time....

//! use ref allows us to do DOM manipulation in React just like in js....,


// const varname = useRef(initial value);

function App() {

   const input = useRef(null);

  function handleclick(){
      input.current.style.color = "red"; // ! change the properties like you change in DOM
  }


  return (
  <div className="app">

    <input type="text" className="input" ref={input} /> // ? just provide a refrence to the element as you named the variable
    <button onClick={handleclick}>click me!!</button>

  </div>    
  );
}

export default App;

