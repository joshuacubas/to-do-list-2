import React, {useState} from 'react';

export default function EditForm(props) {

    //dont forget to add props in input above
    // cancel button
    // submit changes button
    // form 
        // needs initial value of previous todo text
        // placeholder says new decription here
    
    const [input,setInput] = useState(props.prevText)

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(input.trim())
        //send input back to todo as parameter to be used in a todo function 
        props.editTodoTaskText(input);
        //that will amp thru todos arr and make a dupl array sans todo with id of the edit todo
        // then add the edited todo(same id , new text), and reassign todos arr value to dupl arr
    }

    return (
        <div className={props.isHidden ? "todo-edit-form-hidden" : "todo-edit-form-invisible"}>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Add changes here"
                        value={input}
                        onChange={handleChange}
                        maxLength="50"
                        className="edit-form-textboxes"
                    />
                </label>
                <button type="button" onClick={props.hide} className="edit-form-buttons">Cancel</button>
                <input type="submit" value="Submit" className="edit-form-buttons"/>
                
            </form>
        </div>
    )
}
