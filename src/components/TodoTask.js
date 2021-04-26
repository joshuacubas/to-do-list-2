import React from 'react'

export default function TodoTask(props) {
    const deleteTodoTask = () => {
        console.log("delete task called",props.task.id)
        let subtractedArr = props.todosArr.filter(todo => todo.id !== props.task.id);
        props.setTodosArr(subtractedArr);

    }

    const taskCompletionToggled = () => {
        console.log(`${props.task.text} clicked`)
        // change the task.isCompleted to opposite
    } 

    return (
        <li>
            <div 
                className="todo-text"  
                onClick={taskCompletionToggled}
            >
                <p>{props.task.text}</p>
            </div>

            <div className="todo-buttons-div">
                <button
                    onClick={deleteTodoTask}
                    className="todo-buttons"
                >
                    ✘
                </button>
                <button className="todo-buttons">✎</button>
            </div>
        </li>
    )
}
