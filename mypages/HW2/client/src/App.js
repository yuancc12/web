
import { useState } from 'react';
import './App.css';
import Axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  const[name,setname]=useState("");
  const[age,setage]=useState(0);
  const[position,setposition]=useState("");
  const[country,setcountry]=useState("");
  const[wage,setwage]=useState(0);

  const addEmployee=()=>{
    Axios.post("http://localhost:3001/create",
    {
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage,
    }).then(() => {
      console.log("success")
  });
};
  return (
    <div className="App">
      <div className="information">
        <label>name</label>
        <input type="text" onChange={(event) => {
        setname(event.target.value)
        }}/>
        <label>age</label>
        <input type="number" onChange={(event) => {
        setage(event.target.value)
        }}/>
        <label>position</label>
        <input type="text" onChange={(event) => {
        setposition(event.target.value)
        }}/>
        <label>country</label>
        <input type="text" onChange={(event) => {
        setcountry(event.target.value)
        }}/>
        <label>wage</label>
        <input type="number" onChange={(event) => {
        setwage(event.target.value)
        }}/>
        <button onClick={addEmployee} >Add</button>
        </div>
     
    </div>
  );
};

export default App;
