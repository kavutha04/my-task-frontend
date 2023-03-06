import {useState} from 'react'

function PersonCard({person, deletePerson}) {

//Handles the delete function for People
    function handleDelete(){
        fetch(`https://task-manager-ifbi.onrender.com/people/${person.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedPerson => {
                deletePerson(deletedPerson)
            })
    }
/********************************* */
    
    return (
        
        <div class="">
            
            <div class="">
                <span class="d-flex">
                <li class="col-6 col-sm-1 list-unstyled" key={person.id} value={person.id}>{person.name}</li>
                
                <button class=" rounded col-6 col-sm-3 border btn btn-outline-dark" onClick={handleDelete}>Delete User</button>
                </span> 
           </div>
        </div>
    )
}

export default PersonCard