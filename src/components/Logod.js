import names from "./logos.json";
import React from 'react';


const Logod=()=>{
    return(
        <div>
        {
            names.map((item)=>(
                <div className="logocon" key={item.tho}>
                <img src={item.ironman} onClick={()=>{window.open(item.iron)}}/>
                <img src={item.captainamerica} onClick={()=>{window.open(item.cap)}}/>
                <img src={item.hulk} onClick={()=>{window.open(item.hul)}}/>
                <img src={item.thor} onClick={()=>{window.open(item.tho)}}/>
                <img src={item.blackwidow} onClick={()=>{window.open(item.black)}}/>
                <img src={item.hawkeye} onClick={()=>{window.open(item.hawk)}}/>
                </div>

            ))
        }
        
        </div>

    )
}

export default Logod;