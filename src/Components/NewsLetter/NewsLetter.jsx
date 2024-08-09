import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter-text">
        <h1>
          Subscribe To Our Community
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
