import React from 'react'
import service1 from '../../assets/images/services/service-1.jpg'
import service2 from '../../assets/images/services/service-2.jpg'
import service3 from '../../assets/images/services/service-3.jpg'
import './styles.css'

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
            <div className="col-lg-4 col-md-6 blog-smk">
              <div className="blog-single">
                <img src={service1} alt="" />

                <div className="blog-single-det">
                  <h6>Deperssion</h6>
                  <p>
                    Not the answer you're looking for? Browse other questions
                    tagged is simply dummy text of the printing and typesetting
                    in
                  </p>
                  <a href="blog_single.html">
                    <button className="btn btn-success btn-sm">
                      More Detail
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 blog-smk">
              <div className="blog-single">
                <img src={service2} alt="" />

                <div className="blog-single-det">
                  <h6>Anxity</h6>
                  <p>
                    Not the answer you're looking for? Browse other questions
                    tagged is simply dummy text of the printing and typesetting
                    in
                  </p>
                  <a href="blog_single.html">
                    <button className="btn btn-success btn-sm">
                      More Detail
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 blog-smk">
              <div className="blog-single">
                <img src={service3} alt="" />

                <div className="blog-single-det">
                  <h6>Relationship Issue</h6>
                  <p>
                    Not the answer you're looking for? Browse other questions
                    tagged is simply dummy text of the printing and typesetting
                    in
                  </p>
                  <a href="blog_single.html">
                    <button className="btn btn-success btn-sm">
                      More Detail
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
