import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PersonCard from './PersonCard'
import App from './App'
import Home from "./Home"
// import LogOut from "./LogOut"



function Path() {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<PersonCard/>} />
            <Route path ="/home" element ={<App/>} />
            {/* <Route path="/logout" element ={<LogOut/>} /> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Path