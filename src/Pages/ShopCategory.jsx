import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item';
import all_product from '../Components/Assets/all_product';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div className="container">
        <img src={props.banner} alt='banner' className='mb-3'></img>
      </div>
      <div className="container text-center my-3 ">
        <div className="row">
          <h1 className='mb-3'>{props.category}'s Collection</h1>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <div className="col m-1" key={i}> <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} /></div>
            }
            else {
              return null;
            }
          })}

        </div>
      </div>
      )
    </div>
  )
}

export default ShopCategory