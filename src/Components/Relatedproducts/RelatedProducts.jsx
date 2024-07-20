import React from 'react';
import './RelatedProducts.css';
import productData from '../Assets/data/data';
import Item from '../Item/Item';

export default function RelatedProducts() {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-products-item">
            {productData.map((item,index)=>{
                return (<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
            })}
        </div>
        
        </div>
  )
}
