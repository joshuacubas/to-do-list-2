import React from 'react'

export default function EditForm(props) {

    //dont forget to add props in input above
    // cancel button
    // submit changes button
    // form 
        // needs initial value of previous todo text
        // placeholder says new decription here
    
    return (
        <div className={props.isHidden ? "todo-edit-form-hidden" : "todo-edit-form-invisible"}>
            <form>
                <label>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Add changes here" 
                    />
                </label>
                <input type="submit" value="Edit"/>
                <button>Cancel</button>
            </form>
        </div>
    )
}
