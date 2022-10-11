import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Smart Eye is a leading provider of information technology,
                consulting, and business process services. Our dedicated
                employees offer strategic insights, technological expertise and
                industry experience.
              </p>
              <p>
                We focus on technologies that promise to reduce costs,
                streamline processes and speed time-to-market, Backed by our
                strong quality processes and rich experience managing global...{' '}
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Useful Links</h2>
              <ul className="list-unstyled link-list">
                <li>
                  <a ui-sref="about" href="#/about">
                    About us
                  </a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a ui-sref="portfolio" href="#/portfolio">
                    Portfolio
                  </a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a ui-sref="products" href="#/products">
                    Latest jobs
                  </a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a ui-sref="gallery" href="#/gallery">
                    Gallery
                  </a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a ui-sref="contact" href="#/contact">
                    Contact us
                  </a>
                  <i className="fa fa-angle-right"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Phone: +91 9159669599 <br />
                Email:{' '}
                <a href="mailto:info@anybiz.com" className="">
                  info@bluedart.in
                </a>
                <br />
                Web:{' '}
                <a href="smart-eye.html" className="">
                  www.bluedart.in
                </a>
              </address>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/">
            2015 &copy; All Rights Reserved | Designed and Developed by
            Smarteyeapps
          </a>

          <span>
            <a href="#test">
              <i className="fab fa-github"></i>
            </a>
            <a href="#test">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#test">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#test">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#test">
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
