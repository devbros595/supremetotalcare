import React from 'react';
import './Offers.css';
import exclusiveImg from '../Assets/data/exclusive_image.png';

export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Discount For You</h1>
            <p>ONLY ON BEST SELLING PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveImg} alt="" />
        </div>
    </div>
  )
}
