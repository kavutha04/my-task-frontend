

function TaskCard({task, onDeleteTask, people, categories, assignPerson}){


    //Handles the delete function for tasks
    function handleDelete(){
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => onDeleteTask(task.id))
    }
    /******************************************** */

    //Matches category id to task.id to populate category names
    let catName = ""

    for (let i = 0; i < categories.length; i++){
        if (categories[i].id === task.category_id){
            catName = categories[i].name
        }
    }
    /************************************* */

    //Matches person id to task.person_id to populate person names
    let person = ""
    
    for (let i = 0; i < people.length; i++){
        if (people[i].id === task.person_id){
            person = people[i].name
        }
    }

    /****************************** */

    //Handles selection change for person assigned to task
    function handleAssign(e){
        
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                person_id: e.target.value
            })
        })
            .then(res => res.json())
            .then(() => {
                assignPerson()
            })
    }
    /****************** */


    return (
        <div class="container">
        <div class="row">
          <div class="">
              <div class="card bg-light border">
                <div class="card-body text-center">
                  <h3 class="card-title">{task.name}</h3>
                  <h5 class="card-text">Category: {catName}</h5>
                  <p class="card-text">Assigned To: {person}</p>
                  <h6 class=" ">Reassign</h6>
                  {people.map((person) => (
                    <button
                      class="btn btn-info"
                      name="person"
                      onClick={handleAssign}
                      key={person.id}
                      value={person.id}
                    >
                      {person.name}
                    </button>
                  ))}
                  <br />
                  <div class="delete-cont">
                    <button class="btn btn-outline-dark" onClick={handleDelete}>
                      Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      
    
    )}

export default TaskCard;