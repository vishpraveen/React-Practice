import React from 'react'

interface Fruit {
    name: string
}

function Friut(fruit: Fruit) {
    return (
        <h3>{fruit.name}</h3>
    )
}

export default Friut