import React from 'react'
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <nav>
        <h1>TASK</h1>
        <h1>TASK</h1>
        <h1>TASK</h1>
        <h2>Lets help you manage them</h2>
        
        <NavLink to = "/users">Add Your Name</NavLink> 
    </nav>
    
  )
}

export default Home