import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your Message has been successfully sent. We will Contact You Soon.</p>;
};

const Cuntact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v50anje",
        "template_ajezphj",
        e.target,
        "-xsayBL_yzkcAI8Ol"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h1>Cuntact Us</h1>
            <p>We Would Like To Hear From you</p>
          </div>
        </div>
        <div className="col-md-9">
          <form className="contact-form" action="" onSubmit={sendEmail}>
            <div className="form-group mt-2">
              <label className="control-label col-sm-2 mb-2" htmlFor="fullName">
                Full Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter Full Name"
                  name="fullName"
                />
              </div>
            </div>
            <div className="form-group mt-2">
              <label
                className="control-label col-sm-2 mb-2"
                htmlFor="companyName"
              >
                Company Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Enter Company Name"
                  name="companyName"
                />
              </div>
            </div>
            <div className="form-group mt-2">
              <label className="control-label col-sm-2 mb-2" htmlFor="email">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Eamil"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group mt-2">
              <label className="control-label col-sm-2 mb-2" htmlFor="message">
                Comment:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="8"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </div>
              <div className="row">{result ? <Result /> : null}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cuntact;
