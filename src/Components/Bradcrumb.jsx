import React from 'react'
import { Link } from 'react-router-dom'


function Bradcrumb(props) {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/shop">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                    <li className="breadcrumb-item"><Link to={`/${props.category}`}>{`${props.category}`}</Link></li>
                    <li className="breadcrumb-item"><Link to={`/${props.product}`}>{`${props.product}`}</Link></li>
                    {/* <li className="breadcrumb-item active" aria-current="page">Data</li> */}
                </ol>
            </nav>
        </div>
    )
}

export default Bradcrumb