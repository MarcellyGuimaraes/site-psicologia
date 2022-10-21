import React from 'react'
import doctt from '../../assets/images/doctt.png'
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
              <h2>Olá, eu sou o Doutor Edilson Soares</h2>
              <span>Psicólogo Clínico Especialista em Manhattan</span>

              <p>
                Lorem Ipsum is simply text of the Lorem Ipsum is simply my text
                of the printing and Ipsum is simply text of the Ipsum is simply
                text of thetypesetting Ipsum is simply text of the stry simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                is simply text of the Lorem Ipsum is simply my text of (APENAS
                UM TEXTO DE TESTE)
              </p>

              <h4>Whatsapp: +55 75 9 9123-4567</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorMessage
