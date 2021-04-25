import React from 'react'

export default function TodoTask(props) {
    return (
        <li>
            <div className="todo-text"><p>{props.task.text}</p></div>
            <div className="todo-buttons-div">
                <button className="todo-buttons">✘</button>
                <button className="todo-buttons">✎</button>
            </div>
        </li>
    )
}
