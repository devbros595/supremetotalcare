import React from "react";
import "./CSS/ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>
          <b>Phone:</b> 123-456-7890
        </p>
        <p>
          <b>Email:</b>{" "}
          <a href="mailto:customerservice@supremetotalcares.com">
            customerservice@supremetotalcares.com
          </a>
        </p>
        <p>
          <b>Address:</b> 123 Main St, Anytown, USA 12345
        </p>
        <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648064286!2d3.1191411480839006!3d6.548028242844956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1722551785560!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      
    </div>
  );
}
