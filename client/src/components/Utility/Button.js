import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

function Button({handleClick, message,icon , classes , messageClass}) {
  return (
    <div onClick={handleClick} className={`${classes}`}>
        <span className={`${messageClass}`}>{message}</span> { icon? <FaGreaterThan className='absolute top-[23px] right-[40px] '/>:null }
    </div>
  )
}

export default Button
