import { FaSearch } from 'react-icons/fa'
import names from "./data.json"
import {useState} from "react"
import Bodied from "./Bodied"

const Header=()=>{

const [query,setQuery]=useState([])
const onvalue=(e)=>setQuery(e.target.value)
const magic=()=>{
  
  filteredNames.map((item)=>(
  <img src={ item.forEach(element => {
    return element
    
  })} style={{width:"100px",height:"100px"}}/>
))
  }
const filteredNames= names.filter((item)=>{
    return item.id.toLowerCase().includes(query)
  })
    return(
      <div>
        <header className="head">
        <div className='heading'></div>
        <div className="search">
        <input type="text" placeholder="Search.." value={query} onChange={onvalue} className='input'/>
        <FaSearch id="sbtn"/>
        </div>
        </header>
          {
            // filteredNames.map((item)=>(
            //   <img src={item.pic5} style={{width:"100px",height:"100px"}}/>
            // ))
            // magic()
          }
      </div>
    )
}

export default Header