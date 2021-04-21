import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input,setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        console.log("submission")
        //stop the refresh on submission
        e.preventDefault();
    }

    return (
        <div>
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
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

