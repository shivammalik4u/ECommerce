import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart  } = useContext(ShopContext);

    return (
        <div className="container">
            <div className=''>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className=''  key={e.id}>
                        <div>
                            <img src={e.image} alt='' className='' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="btn btn-primary">{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => removeFromCart()} alt='' className='' />
                        </div>
                        <hr />
                    </div>
                }
            })}
        </div>
    )
}

export default CartItems