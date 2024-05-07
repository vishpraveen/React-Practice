import React, { useState } from 'react'

/**
 * 
 * handle user input and validate it on button click.
 */
export default function UserForm() {
    var [name, setName] = useState("");
    var [isValidInput, setValidInput] = useState("");

    function updateUserInput(e) {
        setName(e.target.value)
    }

    function validateInput() {
        if (name.length > 0 && name.length < 5) {
            setValidInput("False");
        } else {
            setValidInput("True");
        }
    }

    return (
        <div>
            <div>
                <h1>UserForm</h1>
                <input value={name} placeholder='Enter Name' type='text' onChange={eve => updateUserInput(eve)}></input>
                <p>Is input valid: {isValidInput}</p>
            </div>
            <button onClick={validateInput}>Validate!</button>
        </div>
    )
}
