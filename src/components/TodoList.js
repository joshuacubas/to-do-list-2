import React from 'react'
import TodoTask from "./TodoTask"

export default function todoList(props) {
    const todoLis = props.todosArr.map(task => <TodoTask key={task.id} task={task}/>)
    
    return (
        <div>
            <p>To Do's:</p>
            <ul>{todoLis}</ul>
            <p>Completed:</p>
        </div>

    )
}
