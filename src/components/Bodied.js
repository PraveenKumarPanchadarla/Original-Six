import React, { useState } from "react";
import Modal from "./Modal";

// import { useRef } from "react";

const Bodied= ({filter})=>{
  const [selectedImg, setSelectedImg] = useState(null);
    return(
        <div className="boo">
            { 
            filter.map((item)=>(
                <div className="container" key={item.id}>
                    <img src={item.pic1}  onClick = {() => setSelectedImg(item.pic1)}/>
                    <img src={item.pic3}  onClick={() => setSelectedImg(item.pic2)}/>
                    <img src={item.pic2}  onClick={() => setSelectedImg(item.pic3)}/>
                    <img src={item.pic4}  onClick={() => setSelectedImg(item.pic4)}/>
                    <img src={item.pic5}  onClick={() => setSelectedImg(item.pic5)}/>
                    <img src={item.pic7}  onClick={() => setSelectedImg(item.pic6)}/>
                    <img src={item.pic6}  onClick={() => setSelectedImg(item.pic7)}/>
                    <img src={item.pic8}  onClick={() => setSelectedImg(item.pic8)}/>
                    <img src={item.pic9}  onClick={() => setSelectedImg(item.pic9)}/>
                    <img src={item.pic10} onClick={() => setSelectedImg(item.pic10)}/>
                </div>
            ))


            }

            {
              selectedImg && <Modal selectedImg={selectedImg} setSelectedImg = {setSelectedImg}/>
            }

            
        </div>
    )
}

export default Bodied


