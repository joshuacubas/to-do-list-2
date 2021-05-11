import React, {useState} from 'react'
import EditForm from "./EditForm"

export default function TodoTask(props) {
    const [isHidden,setIsHidden] = useState(true);

    const deleteTodoTask = () => {
        let subtractedArr = props.todosArr.filter(todo => todo.id !== props.task.id);
        props.setTodosArr(subtractedArr);

    }

    const editTodoTaskText = (newText) => {

        const updatedTodo = {
            text : newText,
            id : props.task.id,
            isCompleted : false
        };
        const filteredArr = props.todosArr.filter(todo => todo.id !== props.task.id);
        const updatedArr = [updatedTodo, ...filteredArr];
        props.setTodosArr(updatedArr);
        toggleHiddenTodoForm();
    }

    const taskCompletionToggled = () => {
        console.log(`${props.task.text} clicked`)
        // change the task.isCompleted to opposite
        // or nvm completed UL > Li will have strike through style
    } 

    const toggleHiddenTodoForm = () => {
        setIsHidden(!isHidden);
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
                <button className="todo-buttons" onClick={toggleHiddenTodoForm}>✎</button>
            </div>
            <EditForm 
                isHidden={isHidden} 
                hide={toggleHiddenTodoForm} 
                prevText={props.task.text}
                editTodoTaskText={editTodoTaskText}
            />
        </li>
    )
}
