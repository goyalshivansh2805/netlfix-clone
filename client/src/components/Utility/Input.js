import React from 'react'

function Input({value,setValue,type,id,message}) {
  return (
    <div className="relative h-[70px] w-[400px] mb-[30px] ">
        <input type={`${type}`}
            id={`${id}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}

            className="peer  caret-white pl-[20px] pt-[15px] text-white absolute top-[140px] left-[70px] h-full w-full bg-gray-300/10  border-gray-300 border-[1px] rounded-[5px]"
        />
        <label htmlFor={`${id}`} className={`absolute ease-in-out transition-all duration-300 text-gray-400 peer-focus:text-[15px] peer-focus:top-[150px] peer-focus:left-[90px] ${value ? 'top-[140px] text-[15px] left-[90px]' : 'top-[150px] text-[20px] left-[90px]'} `}>{`${message}`}</label>
    </div>
  )
}

export default Input
