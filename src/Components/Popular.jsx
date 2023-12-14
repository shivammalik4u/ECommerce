import React from 'react'

import data_product from './Assets/data'
import Item from './Item'

function Popular() {
    return (
        <div className="container text-center my-3">
            <div className="row">
                <h2>Best Sellers </h2>
                {data_product.map((item, i) => {
                    return <div className="col m-1" key={i}> <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} /></div>
                })}

            </div>
        </div>
    )
}

export default Popular