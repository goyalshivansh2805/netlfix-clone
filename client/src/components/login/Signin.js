import {React} from 'react';
import SignInBox from './Utility/SignInBox';
import Background from '../Utility/Background.js'
import Logo from '../Utility/Logo.js'

export default function SignIn() {
  return (
    <div>
        <Background classes={"absolute inset-0 bg-black/45"}/>
        <Logo />
        <SignInBox/>
    </div>
  )
}