import { createContext, useState } from "react";
import "./App.css";
import Child1 from "./child1";


// use context is used to avoid prop driling 


//! step 1
const DetailsContext = createContext();

function App() {
  const [color,Setcolor]=useState('red');
    let myname  = 'vineet';
    const college = 'NIST';
    const age = 19;
  return (
  
 //! step 2
  // context is wraped here // and i pass all the values in an object
<div className="app">
    <DetailsContext.Provider value={{myname,college,age,color,Setcolor}}>
  <Child1/> 
  </DetailsContext.Provider>
</div>
  //now child 1 has child 2 in it so i need to pass the color and my details that can be shared among all the children without passing as a generational way
       

    
  );
}

export default App;
export  {DetailsContext};
