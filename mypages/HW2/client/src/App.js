
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
  const[employeelist,setemployeelist]=useState([]);
  const addEmployee=()=>{
    Axios.post("http://localhost:3001/create",
    {
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage,
    }).then(() =>{
      setemployeelist([
        ...employeelist,
        {
          name:name,
          age:age,
          country:country,
          position:position,
          wage:wage,
        }]);
    });
  };
const getemployees=()=>{
  Axios.get("http://localhost:3001/employees").then((response)=>{
    setemployeelist(response.data)
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
       
        <div className='employees'>
        <button onClick={getemployees}>show employees</button>
        {employeelist.map((val,key)=>{
        return <div className='employee'>
           <h3>Name:{val.name}</h3>
           <h3>age:{val.age}</h3>
           <h3>country:{val.country}</h3>
           <h3>position:{val.position}</h3>
           <h3>wage：{val.wage}</h3>
           </div>
        })}
        </div>
    </div>
  );
};

export default App;
