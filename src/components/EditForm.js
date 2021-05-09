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

    return (
        <div className={props.isHidden ? "todo-edit-form-hidden" : "todo-edit-form-invisible"}>
            <form>
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
