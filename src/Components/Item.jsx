import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <Link to={`/product/${props.id}`}><img src={props.image} className="card-img-top" alt="..."/></Link>
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