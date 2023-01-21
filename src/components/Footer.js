import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center bg-light text-dark">
      <div className="d-flex m-3">
        <i className="fa-solid fa-mobile-screen-button m-1">:</i>
        <p>(+995) 557 43 03 07 </p>
      </div>

      <div className="d-flex m-3">
        <i className="fa-solid fa-map-location-dot m-1">:</i>
        <p>#13 Tamarashvili st, Tbilisi, Georgia</p>
      </div>
    </div>
  );
};

export default Footer;
