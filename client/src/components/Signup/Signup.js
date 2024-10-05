import React from 'react'
import Background from '../Utility/Background'
import Logo from '../Utility/Logo'
import SignUpBox from './Utility/SignUpBox'

function Signup() {
  return (
    <div>
      <Background classes={"absolute inset-0 bg-black/45"}/>
      <Logo />
      <SignUpBox />
    </div>
  )
}

export default Signup
