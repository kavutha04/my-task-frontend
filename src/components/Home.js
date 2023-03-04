import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>TASK</h1>
        <h1>TASK</h1>
        <h1>TASK</h1>
        <h2>Lets help you manage them</h2>
        <h2><Link to="/users">Add Your Name </Link> to manage your tasks</h2>
    </div>
  )
}

export default Home