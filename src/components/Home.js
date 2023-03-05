import React from 'react'
import { NavLink } from "react-router-dom"

function Home() {
  return (
<div>
  <h1 class="text-primary">TASK MANAGER</h1>
     <div class=" bg-info mb-3 col d-flex justify-content-center" >
      <div class=" bg-light card text-center">
        <h1 class="text-danger">TASK</h1>
        <h3 class="text-success">TASK</h3>
        <p class="card-text">TASK</p>
        <h2>Lets help you manage Tasks</h2>
        
        <NavLink to = "/home"><button class="btn btn-outline-warning ">Register</button></NavLink> 
    </div>
    </div>
  </div>
  )
}

export default Home