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
            <p>To Do's:</p>
            <ul>{todoLis}</ul>
            <p>Completed:</p>
            {/* <ul id="completed-ul">
                <li className="completed-todos"><p>finish hw</p></li>
                <li className="completed-todos"><p>take out trash</p></li>
                <li className="completed-todos"><p>wash car</p></li>
            </ul> */}
            <ul className="completed-todos-ul">{completedLis}</ul>
        </div>

    )
}
