import {useState} from 'react'
import PersonCard from './PersonCard'

function PersonList({people, addPerson, deletePerson}) {
    const [newPerson, setNewPerson] = useState("")

    //Handles changes to form
    function handleChange(e) {
        setNewPerson(e.target.value)
    }
    /************************* */

    //Handles submit form functionality
    function handleSubmit(e) {
        e.preventDefault();

        fetch('https://task-manager-ifbi.onrender.com/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newPerson
            })
        })
            .then(res => res.json())
            .then((newName) => {
                addPerson(newName)
                setNewPerson("")
            })
    }
    /************************************** */
    
    return (
        <div id="">
            <div class="text-center bg-">
            <h4><u>Add Your Name</u></h4>
            <form class="border border-5 border-info rounded-pill" onSubmit={handleSubmit}>
                <label class ="form-label">New User</label>
                <br></br>
                <input id="new-person-input" type="text" placeholder="Add new person..." value={newPerson} onChange={handleChange}></input>
                <br></br>
                <br></br>
                <input class="btn btn-info" id="submit-person" type="submit" value="Add User"></input>
            </form>
            </div>
            <h4 class="badge fs-4 bg-secondary">USERS</h4>
            <ul id="person-ul-container">
                {people.map((person) => {
                    return(
                        <PersonCard person={person} deletePerson={deletePerson} key={person.id} />
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default PersonList