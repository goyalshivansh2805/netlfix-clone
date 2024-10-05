import React from 'react'
import Navbar from './SubHome/Navbar.js';
import Background from '../Utility/Background.js';
import Content from './SubHome/Content.js';

function Home() {
  return (
    <div >
        <Background classes={"absolute inset-0 bg-black/70"}/>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home
