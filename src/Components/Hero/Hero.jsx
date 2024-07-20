import React from 'react';
import './Hero.css';

export default function Hero(props) {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1>{props.categoryName}</h1>
            <p>GET THE BEST DEAL OFF YOUR FAVOURITE {props.categoryName} TRENDS</p>
            <button>Explore Now</button>
            <i
              class="fa-solid fa-arrow-down fa-fade"
              style={{ color: "black", cursor: "pointer"  }}
            ></i>
            <i
              class="fa-solid fa-arrow-down fa-fade"
              style={{ color: "black", cursor: "pointer" }}
            ></i>
            <i
              class="fa-solid fa-arrow-down fa-fade fa-lg"
              style={{ color: "black", cursor: "pointer" }}
            ></i>
        </div>
    </div>
  )
}
