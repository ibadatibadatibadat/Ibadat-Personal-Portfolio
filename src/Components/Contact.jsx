import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="main">
      <h1 className="heading">Contact Us</h1>
      <div className="form-container">
        <form action="post">
          <h3 className="form-heading">Contact From</h3>
          <div className="input-container">
            <h4 className="input-heading">
              First Name: <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="text"
              placeholder="enter your first name"
            />
          </div>
          <div className="input-container">
            <h4 className="input-heading">
              Last Name: <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="text"
              placeholder="enter your Last name"
            />
          </div>
          <div className="input-container">
            <h4 className="input-heading">
              Email : <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="email"
              placeholder="enter your email"
            />
          </div>
          <div className="input-container">
            <h4 className="input-heading">
              Contact No.: <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="number"
              placeholder="enter your Contact Number"
            />
          </div>
          <div className="input-container">
            <h4 className="input-heading">
              Feedback: <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="text"
              placeholder="enter your Feedback"
            />
          </div>
          <div className="input-container">
            <h4 className="input-heading">
              Social Media: <span className="star-item">*</span>{" "}
            </h4>
            <input
              className="input-field"
              type="text"
              placeholder="enter your Social Media Id"
            />
          </div>
          <button type="submit" className="submit-form">sumbit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
