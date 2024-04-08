import { useState } from "react";

function ToDoList(){  

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function addTask(){
        if(newTask.trim() != ''){            //the trim() method is used to remove any white space
        setTasks(t => [...tasks, newTask])
        setNewTask('');
        }
    }
    function removeTask(index){
        setTasks(t => t.filter((_, i) => i !== index))
    }
    function handleNewTask(event){
        setNewTask(event.target.value)
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask)
        }
    }
    
    function moveTaskDown(index) {
        if (index >= 0 && index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    return(<>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleNewTask}/>
            <button className="add-button" onClick={addTask}>Add</button><br />
        </div>
        <ol>
            {tasks.map((taskElement, index) => 
                   <li key={index}>
                    <span className="text">{taskElement}</span>
                    <button className="delete-button" onClick={() => removeTask(index)}>DELETE</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>DOWN</button>
                   </li>)}
        </ol>
    </div>
    </>);
}

export default ToDoList