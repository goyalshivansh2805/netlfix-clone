import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLanguage } from "react-icons/io5";
import Logo from '../../Utility/Logo.js'
import Button from '../../Utility/Button.js';
function Navbar() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/login')
  }

  return (
    <div className='w-full'>
      <Logo />

      <div className=" absolute top-[40px] right-[230px] border-gray-400 border-[1px] rounded-[5px]">
        <label htmlFor="language" className="hidden">Select Language</label>
        <select name="language" id="language" className='\ h-[40px] w-[175px] text-center text-white bg-transparent text-[25px] font-normal '>
          <option value="english" className='text-black'>English</option>
          <option value="hindi" className='text-black'>हिन्दी</option>
        </select>
      </div>
      <div className="absolute text-white top-[48px] right-[370px]">
          <IoLanguage size={25}/>
      </div>

      <Button 
        icon={false}
        message={"Sign In"}
        classes = {"absolute top-[40px] hover:bg-red-700  right-[115px] rounded-[4px] text-[20px] cursor-pointer text-white font-bold w-[100px] h-[40px] grid place-content-center bg-red-600"}
        messageClass={null}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Navbar
