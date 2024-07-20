import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter-text">
        <h1>
          Subscribe To Our Community
          <i
            class="fa-solid fa-group-arrows-rotate fa-spin fa-xs"
            style={{ color: "gold", marginLeft: "15px"}}
          ></i>
        </h1>
        <p>
          Be the first to get to get the latest updates on our promotion
          campaigns, products and services.
        </p>
      </div>
      <div className="newsletter-form">
        <form>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
