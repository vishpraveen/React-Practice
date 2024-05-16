import React, { useEffect, useState } from 'react'
import fruits from "../assets/friuts.json";
import Fruit from "./Friut"

function FriutsList() {
    console.log(`Fruit Data: ${JSON.parse(JSON.stringify(fruits))}`);
    var [count, setCount] = useState(0);
    var [list, setList] = useState<string[]>([]);
    useEffect(() => {
        new Promise((res, rej) => {
            let data = JSON.parse(JSON.stringify(fruits));
            res(data);
        }).then(d => {
            setCount(count + 1);
            setList(d as string[]);
        }).catch(e => {
            console.log(`Error: ${e}`)
        })
    })


    return (
        <div>
            <h1>Count: {count}</h1>
            <ul>
                {(list.map((f) => <Fruit name={f} />))}
            </ul>
        </div>
    )
}

export default FriutsList