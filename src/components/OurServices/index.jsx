import React from 'react'
import service1 from '../../assets/images/services/service-1.jpg'
import service2 from '../../assets/images/services/service-2.jpg'
import service3 from '../../assets/images/services/service-3.jpg'
import './styles.css'
import { services } from '../../assets/api.js'

const OurServices = () => {
  return (
    <section className="our-blog container-fluid">
      <div className="container">
        <div className="session-title row">
          <h2>Our Services</h2>
          <p>
            Not the answer you're looking for? Printing and typesetting inLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s Lorem
          </p>
        </div>
        <div className="col-sm-12 blog-cont">
          <div className="row no-margin">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img src={service.img} alt="" />

                  <div className="blog-single-det">
                    <h6>{service.title}</h6>
                    <p>{service.text}</p>
                    <a href={service.link}>
                      <button className="btn btn-success btn-sm">
                        Mais Detalhes
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
