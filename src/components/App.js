import '../App.css';
import List from './List';

import {useState, useEffect} from 'react';

function App() {
  let [taskData, setTaskData] = useState([])
  let [refTask, setRefTask] = useState(true)
  let [peopleData, setPeopleData] = useState([])
  let [refPeople, setRefPeople] = useState(true)
  let [categoryData, setCategoryData] = useState([])
  let [refCategory, setRefCategory] = useState(true)

  //Use Effects for rendering page

  //Import tasks
  useEffect(() => {
    fetch("https://task-manager-ifbi.onrender.com/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        if (refTask === true){
          setTaskData(tasks)
          setRefTask(false)
        }
      })
  }, [refTask])
/***************************** */

//Import people
  useEffect(() => {
    fetch("https://task-manager-ifbi.onrender.com/people")
      .then((res) => res.json())
      .then((people) => {
        if (refPeople === true){
          setPeopleData(people)
          setRefPeople(false)
        }
      })
  }, [refPeople])
  /**************************** */

  //Import categories
  useEffect(() => {
    fetch("https://task-manager-ifbi.onrender.com/categories")
      .then((res) => res.json())
      .then(categories => {
        if (refCategory === true){
          setCategoryData(categories)
          setRefCategory(false)
        }
      })
  }, [refCategory])
  /***************************** */

  //Passed down as prop to AddToDo to update state after task creation
  function handleAddTask(newTask){
    const updatedTasks = [...taskData, newTask]
    setTaskData(updatedTasks)
    setRefTask(true)
  }
  /************************************************* */


  //Passed down as prop to TaskCard to update state after task deletion
  function handleDeleteTask(deletedTask){
    const updatedTasks = taskData.filter((task) => task.id !== deletedTask)
    setTaskData(updatedTasks)
    setRefTask(true)
  }
/**************************************************** */

//Passed down as prop to TaskCard to update after assigning person
function handleUpdatePerson(){
  setRefTask(true)
}
/********************************** */

//Handles new person request
function handleAddPerson(newPerson){
  let newPeople = [...peopleData, newPerson]
  setPeopleData(newPeople)
  setRefPeople(true)
}
/*************************** */
  
//Handles deleting a person from list
function handleDeletePerson(deletedPerson){
  const newPeople = peopleData.filter((person) => person.id !== deletedPerson)
  setPeopleData(newPeople)
  setRefPeople(true)
}
/******************* */

//Handles the sort functionality
function handleSort(sortedTasks){
  setTaskData(sortedTasks)
}
/**************************** */


  return (
    <div className="app">
      
      
        <h1 class=" bg-info text-end">Let's Manage These Tasks</h1>
        <List tasks={taskData} categories={categoryData} people={peopleData} onSort={handleSort} assignPerson={handleUpdatePerson} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} addPerson={handleAddPerson} deletePerson={handleDeletePerson} />
      
    </div>
  );
}

export default App;