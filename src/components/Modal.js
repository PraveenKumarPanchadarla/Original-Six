import { motion } from 'framer-motion';
import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        //you can click on the enlarged img
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

  return (
    <motion.div 
      className='backdrop' 
      onClick={handleClick}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
    >
        <motion.img 
          src={selectedImg} 
          alt='modal-img'
          initial = {{ y: "-100vh" }}
          animate = {{ y: 0 }}
        />
    </motion.div>
  )
}

export default Modal;