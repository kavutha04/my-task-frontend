import {useState} from "react";

function AddToDo({onAddTask, categories, people}) {
    const [formData, setFormData] = useState({name: "", category: "", person: ""})

    //Handles the add task functionality
    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                category: formData.category,
                person: formData.person
            })
        })
            .then((res) => res.json())
            .then((newTask) => {
                onAddTask(newTask)
                setFormData({name: ""})
            })
    }
    /***************************************** */


    //Handles changes to input form
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    /******************************** */

    return (
        <div id="">
            <form onSubmit={handleSubmit}>
                <div class="mb-3 text-center">
                <label class=""id="new-task-title" for="new-task">Add a New Task:</label>
                <input id="new-task" class="form-control" type="text" name="name" placeholder="Enter a task..." value={formData.name} onChange={handleChange}></input>
                
                <select name="category" class="form-select" onChange={handleChange}>
                    <option placeholder="Select a category">--- Select a category ---</option>
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
                <select name="person" class="form-select" onChange={handleChange}>
                    <option placeholder="Assign to">--- Assign to ---</option>
                    {people.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}
                </select>
                <input id="submit-task" class="" type="submit" value="Submit" ></input>
                </div>
            </form>
        </div>
    )
}

export default AddToDo