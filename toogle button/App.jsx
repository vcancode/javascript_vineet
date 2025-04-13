import "./App.css";
import Header from "./header";
import React, { useState,useEffect } from "react";
import Toogleswitch from "./toogleswitch";


function App() {
  return (
    <div className="h-full w-full flex text-center pl-10 pr-10 justify-center items-center">
        <Toogleswitch/>
    </div>
    
  );
}

export default App;
