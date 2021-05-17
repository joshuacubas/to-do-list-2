import React, {useState} from 'react'
import EditForm from "./EditForm"

export default function TodoTask(props) {
    const [isHidden,setIsHidden] = useState(true);

    const deleteTodoTask = () => {
        let subtractedArr = props.todosArr.filter(todo => todo.id !== props.task.id);
        props.setTodosArr(subtractedArr);

    }

    const editTodoTaskText = (newText,completionStatus=false) => {
        changeTodoTaskText(newText,completionStatus=false);
        toggleHiddenTodoForm();
    }

    const changeTodoTaskText = (newText,completionStatus=false) => {

        const updatedTodo = {
            text : newText,
            id : props.task.id,
            isCompleted : completionStatus
        };
        const filteredArr = props.todosArr.filter(todo => todo.id !== props.task.id);
        const updatedArr = [updatedTodo, ...filteredArr];
        props.setTodosArr(updatedArr);
        
    }

    const taskCompletionToggled = () => {
        changeTodoTaskText(props.task.text, !props.task.isCompleted);
        console.log(props.task.isCompleted)
        // change the task.isCompleted to opposite
        // or nvm completed UL > Li will have strike through style
    } 

    const toggleHiddenTodoForm = () => {
        setIsHidden(!isHidden);
    }

    return (
        <li>
            <div className="div-todo-text-btns-containers">
                <div 
                    className={props.task.isCompleted ? "completed-text" : "todo-text" } 
                    onClick={taskCompletionToggled}
                >
                    <p>{props.task.text}</p>
                </div>

                <div className="todo-buttons-div">
                    <button className="todo-buttons" onClick={toggleHiddenTodoForm}>✎</button>
                    <button
                        onClick={deleteTodoTask}
                        className="todo-buttons"
                    >
                        ✘
                    </button>
                </div> 
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
