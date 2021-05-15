import React, {useState, useRef, useEffect} from 'react'

export default function TodoForm(props) {
    const [input,setInput] = useState("");

    const inputRef = useRef(null);

    useEffect( ()=>{inputRef.current.focus()} );

    const addTodo = () => {
        const timeStr = Date.now();
        props.setTodosArr([...props.todosArr,{
            text : input,
            id : parseInt(timeStr),
            isCompleted : false
        }]);
    }

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo();
        setInput("");
    }

    return (
        <div id="add-todo-form-container">
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Description Here"
                    name="description"
                    className="form-input-box"
                    onChange={handleChange}
                    ref={inputRef}
                    maxLength="50"
                />
                <button id="add-todo-form-button">Add New</button>
            </form>
        </div>
    )
}

