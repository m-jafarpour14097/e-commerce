import React from "react";
import { home_img } from "../utils/images";

const Futures = () => {
  return (
    <div className="">
      <div className="w-100  mb-5 border-bottom pb-5 bg-light">
        <div className="container text-center text-dark ">
          <div className="row pt-5">
            <div className="col-md-4">
              <img src={home_img[0]} className="img-fluid" />
              <h3>Diesel & Peterol Engine Oil</h3>
              <p>
                WM Diesel & Petrol Engine oil that helps extend engine life.
              </p>
            </div>
            <div className="col-md-4">
              <img src={home_img[1]} className="img-fluid" />
              <h3>Motorcycle Engine Oil</h3>
              <p>
                WM Motorcycle Engine Oil is designed for high-performance 4T
                motorcycles.
              </p>
            </div>
            <div className="col-md-4">
              <img src={home_img[2]} className="img-fluid" />
              <h3>Automatic Transmission Fluid</h3>
              <p>
                WM ATF is a fully synthetic transmission fluid designed for use
                in passenger cars.
              </p>
            </div>
            <div className="col-md-4">
              <img src={home_img[3]} className="img-fluid" />
              <h3>Automotive Brake Fluid</h3>
              <p>
                WM brake fluid designed for all driving conditions and brake
                systems.
              </p>
            </div>
            <div className="col-md-4">
              <img src={home_img[4]} className="img-fluid" />
              <h3>Industrial Lubricants</h3>
              <p>
                WM Industrial oil are high performance, multipurpose mineral oil
                based.
              </p>
            </div>
            <div className="col-md-4">
              <img src={home_img[5]} className="img-fluid" />
              <h3>Automotive Gear Oil</h3>
              <p>
                WM multi-grade gear oil is recommended for manual transmissions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent mb-5 border-bottom pb-5">
        <h1 className="title text-center text-light">
          Checkout Our Best Services
        </h1>
        <div className="d-flex flex-md-row justify-content-evenly">
          <div className="d-flex flex-column bg-light m-3 text-center rounded services">
            <i className="fa-solid fa-flag-checkered fs-1 m-2 text-danger"></i>
            <h3>MISSION</h3>
            <p className="text-muted">
              We dedicate ourselves to supplying high quality lubricant
              solutions that provide enhanced performance through constant
              innovation and continuous improvement.
            </p>
          </div>
          <div className="d-flex flex-column bg-light m-3 text-center rounded services">
            <i className="fa-solid fa-eye-low-vision fs-1 m-2 text-danger"></i>
            <h3>VISION</h3>
            <p className="text-muted">
              WM will lead the way to the future of energy with a firm
              commitment to quality, innovation and environment friendly
              practices.
            </p>
          </div>
          <div className="d-flex flex-column bg-light m-3 text-center rounded services">
            <i className="fa-sharp fa-solid fa-atom fs-1 m-2 text-danger"></i>
            <h3>Expert Advice</h3>
            <p className="text-muted">
              We actively provide toll blending services for your brand of
              lubricants. We can blend and supply lubricants as per your
              specifications and formulations,
            </p>
          </div>
          <div className="d-flex flex-column bg-light m-3 text-center rounded services">
            <i class="fa-sharp fa-solid fa-vial fs-1 m-2 text-danger"></i>
            <h3>Quality Assurance</h3>
            <p className="text-muted">
              We are equipped with sophisticated laboratory instruments and have
              a highly trained and experienced team to provide accurate analysis
              and testing of lubricants and greases.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Futures;
