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

    const completedLis = props.todosArr.filter(ea => ea.isCompleted === true).map(task => 
        <TodoTask 
            key={task.id} 
            task={task} 
            setTodosArr={props.setTodosArr} 
            todosArr={props.todosArr}
        />
    );
    
    return (
        <div>
            <ul>{todoLis}</ul>
            <br />
            <h2>Things Completed:</h2>
            <br />
            <ul id="completed-todos-ul">{completedLis}</ul>
        </div>

    )
}
