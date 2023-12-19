import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart , addToCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className="container">
        <table className="table table-striped table-hover thead-light">
          <thead>
            <tr>
              <th className="text-center">Products</th>
              <th className="text-center">Title</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody className='container'>
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr key={e.id}>
                    <td className="text-center md-col-1">
                      <img src={e.image} alt="" className="img-fluid " style={{height: 80}} />
                    </td>
                    <td className="text-center md-col-4">{e.name}</td>
                    <td className="text-center md-col-1">${e.new_price}</td>
                    <td className="text-center md-col-3">
                      <button className="btn btn-sm btn-primary mx-1" onClick={() => removeFromCart(e.id)}>-</button>
                      {cartItems[e.id]}
                      <button className="btn btn-sm btn-primary mx-1" onClick={() => addToCart(e.id)} >+</button>
                    </td>
                    <td className="text-center md-col-2">${e.new_price * cartItems[e.id]}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        <table className='table'>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${getTotalCartAmount()}</td>
            </tr>
            <tr>
              <td>Shipping Fee</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${getTotalCartAmount()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    )
}

export default CartItems