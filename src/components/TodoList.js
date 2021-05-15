import React from 'react'
import TodoTask from "./TodoTask"

export default function todoList(props) {
    const todoLis = props.todosArr.filter(ea => ea.isCompleted === false).map(task => 
        <TodoTask 
            key={task.id} 
            task={task} 
            setTodosArr={props.setTodosArr} 
            todosArr={props.todosArr}
        />
    );
    const completedTodosExist = props.todosArr.filter(ea => ea.isCompleted === true)
    
    const completedLis = completedTodosExist.map(task => 
        <TodoTask 
            key={task.id} 
            task={task} 
            setTodosArr={props.setTodosArr} 
            todosArr={props.todosArr}
        />
    );
    console.log("completedTodosExist result : ",completedTodosExist)

    const thingsCompleted = <h1>{completedTodosExist.length === 0 ? "" : "Completed"}</h1>

    
    return (
        <div>
            <ul>{todoLis}</ul>
            <br />
            {thingsCompleted}
            <br />
            <ul id="completed-todos-ul">{completedLis}</ul>
        </div>

    )
}
