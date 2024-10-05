import React from 'react'
import {Link } from 'react-router-dom';
function Logo() {
  return (
    <div className="w-full h-full absolute top-[25px] left-[110px]">
        <Link to="/">
            <img src="Images/netflix-logo.png" alt="logo" className="h-[60px] w-[210px]"/>
        </Link>
    </div>
  )
}

export default Logo
