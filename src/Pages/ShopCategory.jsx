import React, { useContext, useState } from 'react';
import './CSS/Shopcategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropDownIcon from '../Components/Assets/data/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Hero from '../Components/Hero/Hero';

export default function ShopCategory(props) {
  const {allProduct} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <Hero categoryName={props.category}/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1 - 12</span> of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProduct.map((item,index)=> {
          if (props.category === item.category) {
              return (
                <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              )
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  )
}
