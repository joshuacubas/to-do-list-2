import React from 'react'

export default function todoform() {
    return (
        <div>
            <form className="task-form">
                <input
                    type="text"
                    placeholder="Description Here"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

