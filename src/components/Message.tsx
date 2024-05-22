import React from 'react'

interface Item {
    data?: string
}

function Message(item: Item) {
    return (
        <div>
            <p>Hello Welcome, {item.data}!</p>
        </div>
    )
}

export default Message