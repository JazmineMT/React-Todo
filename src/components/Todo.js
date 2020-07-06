import React from 'react'
import './Todo.css'

const Todo = props => {
    return (
    
        <div>   
        <p onClick= {()=> props.toggleTask(props.task.id)} 
          className={`task${props.task.completed ? " completed" : ""}`}>{props.task.name}</p>
        </div>
     

    )
}

export default Todo;