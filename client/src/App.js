import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Missing from './components/Utility/Missing.js';
import Signup from './components/Signup/Signup.js';
import { ContextProvider } from './context/Context.js';
import SignIn from './components/login/Signin.js';
import Profile from './components/profile/Profile.js';

function App() {
  return (
    <ContextProvider>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </BrowserRouter>

    </ContextProvider>
  )
}

export default App
