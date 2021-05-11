import React, {useState} from 'react';

export default function EditForm(props) {

    //dont forget to add props in input above
    // cancel button
    // submit changes button
    // form 
        // needs initial value of previous todo text
        // placeholder says new decription here
    
    const [input,SetInput] = useState(props.prevText)

    const handleChange = (e) => {
        SetInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submission");
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
                    />
                </label>
                <input type="submit" value="Submit"/>
                <button type="button" onClick={props.hide}>Cancel</button>
            </form>
        </div>
    )
}
