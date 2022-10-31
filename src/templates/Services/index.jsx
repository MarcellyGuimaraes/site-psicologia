import React from 'react'
import OurSession from '../../components/Home/OurSession'
import { DoubleRight, Home } from '../../components/Icons'

const Services = () => {
  return (
    <div>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>About Spinta Clinic</h2>
            <ul>
              <li>
                <a href="/">
                  <Home /> Home
                </a>
              </li>
              <li>
                <DoubleRight /> Serviços
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="sesion-type">
        <div className="container">
          <div className="row">
            <OurSession />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
