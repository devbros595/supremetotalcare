import React from 'react';
import './Hero.css';

export default function Hero(props) {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1>{props.categoryName}</h1>
            <p>GET THE BEST DEAL OFF YOUR FAVOURITE {props.categoryName} TRENDS</p>
            <button>Explore Now</button>
        </div>
    </div>
  )
}
