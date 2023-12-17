import React, { useContext } from 'react'
// import ShopContext from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bradcrumb from '../Components/Bradcrumb';
import all_product from '../Components/Assets/all_product';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function Product() {
  // const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find(e => e.id === Number(productId));
  return (
    <div>
      <Bradcrumb product = {product.name} category={product.category}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product