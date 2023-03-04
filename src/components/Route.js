import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PersonList from './PersonList'
import App from './App'
import Home from "./Home"
// import LogOut from "./LogOut"



function Path() {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<PersonList/>} />
            <Route path ="/home" element ={<App/>} />
            {/* <Route path="/logout" element ={<LogOut/>} /> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Path