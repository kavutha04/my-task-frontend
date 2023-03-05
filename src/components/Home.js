import React from 'react'
import { NavLink } from "react-router-dom"

function Home() {
  return (
<div>
  <h1 class="text-info bg-dark">TASK MANAGER</h1>
     <div class="col d-flex justify-content-center" >
      <div class=" bg-info card text-center">
        <h1 class="text-danger card-header">TASK</h1>
        <h3 class="text-success">TASK</h3>
        <p class="card-text">TASK</p>
        <h2 class="text-light">Lets help you manage Tasks</h2>
        
        <NavLink to = "/home"><button class="btn btn-outline-primary fs-4 ">Register</button></NavLink> 
    </div>
    <div>
      <img class src="https://images.unsplash.com/photo-1530303263041-b5ca33678f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
    </div>
    </div>
    
  </div>
  )
}

export default Home