import { FaSearch } from 'react-icons/fa'
import Bodied from "./components/Bodied";
import Logod from "./components/Logod"
import { useState } from "react";
import names from "./components/data.json"
import './App.css';
import React from 'react';

function App() {
const [query,setQuery]= useState("")
const onvalue=(e)=>setQuery(e.target.value)
const filteredNames= names.filter((item)=>{
    return item.id.includes(query.toLowerCase()) || item.name.includes(query.toLowerCase())
  })
  return (
    <div className="App">
      <header className="head">
        <div className='heading'></div>
        <div className="search">
          <input type="text" placeholder="Search.." value={query} onChange={onvalue} className='input'/>
          <FaSearch id="sbtn"/>
        </div>
      </header>
      {query.length >0 ?
      <Bodied filter={filteredNames}/> : <Logod/>}
    </div>
  );
}

export default App;
