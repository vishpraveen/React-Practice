import React, { useEffect, useState } from 'react'
import fruits from "../assets/friuts.json";
import Fruit from "./Friut"

function FriutsList() {
    console.log(`Fruit Data: ${JSON.parse(JSON.stringify(fruits))}`);
    var [count, setCount] = useState(0);
    var [list, setList] = useState([]);
    useEffect(() => {
        new Promise((res, rej) => {
            let data = JSON.parse(JSON.stringify(fruits));
            console.log(`Response Data: ${data}`);
            res(data);
        }).then(d => {
            console.log(`Response Data2: ${d}`)
            setCount(count + 1);
            setList(d, list);
        }).catch(e => {
            console.log(`Error: ${e}`)
        })
    })


    return (
        <div>
            <h1>Count: {count}</h1>
            <ul>
                {(list.map((f) => <Fruit fruit={f} />))}
            </ul>
        </div>
    )
}

export default FriutsList