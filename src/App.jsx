import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Aminities from './Components/Aminities'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Aminities" element={<Aminities/>} />
      </Routes>
    </div>
  )
}

export default App
