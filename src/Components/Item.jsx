import React from 'react'

function Item(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.new_price}</p>
                    <p className="card-text">{props.old_price}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
        </div>
    )
}

export default Item