import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    
    <Routes>
      
        <Route path="/" element={<Layout/>}/>     
      
    </Routes>    
  );
}

export default App;
