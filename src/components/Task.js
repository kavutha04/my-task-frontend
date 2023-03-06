import TaskCard from './TaskCard';

function Task({tasks, onDeleteTask, people, categories, assignPerson, onSort}){

    //Maps task data and passes keys and values as props to TaskCard component
    let allTasks = tasks.map((task, i) => {
        return (
            
            <TaskCard 
            key={i}
            task={task}
            onDeleteTask={onDeleteTask}
            people={people}
            categories={categories}
            assignPerson={assignPerson}
        />
        )
    })
    /*************************************************** */

    //Grabs the sorted data from API server
    function handleNameSort(){
        fetch("https://task-manager-ifbi.onrender.com/tasks/alpha")
            .then(res => res.json())
            .then(sortedTasks => onSort(sortedTasks))
    }

    function handleDateSort(){
        fetch("https://task-manager-ifbi.onrender.com/tasks/date")
        .then(res => res.json())
        .then(sortedTasks => onSort(sortedTasks))
    }
    /******************************************* */
    
    return (
        <div id="task-list" class="">
            <h3 class="text-center bg-info" >TASKS</h3>
            <button class="btn btn-dark" onClick={handleNameSort}>Sort Alphabetically</button>
            <div class="text-end">
            <button class=" btn btn-dark" onClick={handleDateSort}>Sort by date created</button>
            </div>
            <div class="row row-cols-md-4 ">
            {allTasks}
            </div>
        </div>
    )
}

export default Task;