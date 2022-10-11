import React from 'react'
import doctt from '../../assets/doctt.png'
import './styles.css'

const DoctorMessage = () => {
  return (
    <div className="doctor-message">
      <div className="inner-lay">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 doc-img">
              <img src={doctt} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 doc-det">
              <h2>Hello, I’m Doctor Sanjay</h2>
              <span>Expert Clinical Psychologist in Manhattan</span>

              <p>
                Lorem Ipsum is simply text of the Lorem Ipsum is simply my text
                of the printing and Ipsum is simply text of the Ipsum is simply
                text of thetypesetting Ipsum is simply text of the stry simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                is simply text of the Lorem Ipsum is simply my text of{' '}
              </p>

              <h4>Call me on : +123 98 8887</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorMessage
