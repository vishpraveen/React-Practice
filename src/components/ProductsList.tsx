import React, { useEffect, useState } from 'react'
import { Item } from '../model/Item';
import Product from './Product';

function ProductsList() {
    let [products, setProducts] = useState<Item[]>();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(resposne => {
                return resposne.json();
            })
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                throw new Error(error);
            })
    }, []);

    return (
        <>
            <ul className='list-group'>
                {/* {products?.map(i => <li key={i.id}>{i.title}</li>)} */}
                {products?.map(i => <Product {...i} />)}
            </ul>
        </>
    )
}

export default ProductsList