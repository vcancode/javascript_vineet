import React from "react";
import { useContext } from "react";
import { DetailsContext } from "./App";

const child2 = () => {

    function handleclick(){
        if(color==='red')
        Setcolor('blue')
        else 
        Setcolor('red');
    }
  const { myname, college, age, color, Setcolor } = useContext(DetailsContext);// i passed my details a state and its funciton directly to the required component
  return (
    <div className={`color ${color==='red'?'red':''}`}>
      <h1>
        hi my name is {myname} and my age is {age} is and i study at {college}
        univesity an i imported {color} color
      </h1>
      <button  onClick={handleclick} className="btn">
                Change Color
      </button>
    </div>
  );
};

export default child2;
