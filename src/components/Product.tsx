import React from 'react'
import { Item } from '../model/Item'

function Product(item: Item) {
    return (
        <div className='list-group-item'>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
        </div>
    )
}

export default Product