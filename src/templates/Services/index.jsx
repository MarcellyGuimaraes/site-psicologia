import React from 'react'

const Services = () => {
  return (
    <div>
      <div class="page-nav no-margin row">
        <div class="container">
          <div class="row">
            <h2>About Spinta Clinic</h2>
            <ul>
              <li>
                {' '}
                <a href="#">
                  <i class="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> About Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section class="sesion-type">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-sess">
                <img src="assets/images/session/therapy-1.jpg" alt="" />
                <p>Individual Therapy</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-sess">
                <img src="assets/images/session/therapy-2.jpg" alt="" />
                <p>Cuple Therapy</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-sess">
                <img src="assets/images/session/therapy-3.jpg" alt="" />
                <p>online Session</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-sess">
                <img src="assets/images/session/therapy-4.jpg" alt="" />
                <p>Group Therapy</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-sess">
                <img src="assets/images/session/therapy-5.jpg" alt="" />
                <p>All Age Group</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-sess sess-ok">
                <h4>Start Your Session today</h4>
                <p>Take the first step on your journey to feeling better. </p>
                <button class="btn btn-success">Book an Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
