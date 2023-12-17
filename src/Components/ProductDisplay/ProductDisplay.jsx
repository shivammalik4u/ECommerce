import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay d-flex container m-5'>
      <div className="productdisplay-left col-sm-6">
        <div className="productdisplay-img-list d-flex d-flex-column">
          <img src={product.image} alt='' />
          
        </div>
        {/* <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div> */}
      </div>
      <div className="productdisplay-right col-sm-6">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className="productdispay-right-prices d-flex ">
          <div className="productdisplay-right-price-old mx-1 text-decoration-line-through">${product.old_price}</div>
          <div className="productdisplay-right-price-new mx-1">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Sunlight dappled through leaves, casting dancing patterns on the skin. A gentle breeze whispered secrets through the trees, carrying the scent of wildflowers and freshly cut grass. It tugged at sun-warmed strands of hair, sending shivers of delight down the spine. In that moment, the world seemed to sigh with contentment, and every breath tasted like freedom.
        </div>
        <div className="productdisplay-right-size my-3">
          <h4>Select size</h4>
          <div className="productdisplay-right-size d-flex">
            <div className='mx-2'>S</div>
            <div className='mx-2'>M</div>
            <div className='mx-2'>L</div>
            <div className='mx-2'>XL</div>
            <div className='mx-2'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='btn btn-primary'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDisplay;