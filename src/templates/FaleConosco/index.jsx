import React from 'react'

const FaleConosco = () => {
  return (
    <div>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>About Spinta Clinic</h2>
            <ul>
              <li>
                {' '}
                <a href="#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i> About Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row no-margin">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="row contact-rooo no-margin">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Contact Form</h2>
              <div className="row">
                <div className="col-sm-3">
                  <label>Enter Name :</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>Email Address :</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Email Address"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>Mobile Number:</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Mobile Number"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>Enter Message:</label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    rows="5"
                    placeholder="Enter Your Message"
                    className="form-control input-sm"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label></label>
                </div>
                <div className="col-sm-8">
                  <button className="btn btn-success btn-sm">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="serv">
                <h2>Address</h2>
                Smart Eye <br />
                Marthandam
                <br />
                K.K District
                <br />
                Phone:+91 9159669599
                <br />
                Email:info@smart-eye.in
                <br />
                Website:www.smart-eye.com
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaleConosco
