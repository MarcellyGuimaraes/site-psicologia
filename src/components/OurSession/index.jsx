import React from 'react'
import therapy1 from '../../assets/session/therapy-1.jpg'
import therapy2 from '../../assets/session/therapy-2.jpg'
import therapy3 from '../../assets/session/therapy-3.jpg'
import therapy4 from '../../assets/session/therapy-4.jpg'
import therapy5 from '../../assets/session/therapy-5.jpg'
import './styles.css'

const OurSession = () => {
  return (
    <section className="sesion-type">
      <div className="container">
        <div className="session-title row">
          <h2>Our Session Types</h2>
          <p>
            Not the answer you're looking for? Printing and typesetting inLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s Lorem
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src={therapy1} alt="" />
              <p>Individual Therapy</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src={therapy2} alt="" />
              <p>Cuple Therapy</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src={therapy3} alt="" />
              <p>online Session</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src={therapy4} alt="" />
              <p>Group Therapy</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src={therapy5} alt="" />
              <p>All Age Group</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess sess-ok">
              <h4>Start Your Session today</h4>
              <p>Take the first step on your journey to feeling better. </p>
              <button className="btn btn-success">Book an Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSession
