import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input,setInput] = useState("");

    const addTodo = () => {
        const timeStr = Date.now();
        props.setTodosArr([...props.todosArr,{text : input, id : parseInt(timeStr)}]);
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
        <div>
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Description Here"
                    name="description"
                    className="form-input-box"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

