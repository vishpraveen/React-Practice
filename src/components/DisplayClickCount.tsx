import React, { useState } from 'react';

/**
 * handle button click to increment/decrement count value on button click.s
 *  */
export default function DisplayClickCount() {
    var [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h3>Click Count: {count}</h3>
            <div>
                <button onClick={incrementCount}>Increment Count</button> <span></span>
                <button onClick={decrementCount}>Decrement Count</button>
            </div>
        </div>
    );
}
