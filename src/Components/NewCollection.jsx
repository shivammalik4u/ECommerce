import React from 'react'

import new_collection from './Assets/new_collections'
import Item from './Item'

function NewCollection() {
    return (
        <div className="container text-center my-3">
            <div className="row">
                <h2>New Collection </h2>
                {new_collection.map((item, i) => {
                    return <div className="col m-1" key={i}> <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} /></div>
                })}

            </div>
        </div>
    )
}

export default NewCollection