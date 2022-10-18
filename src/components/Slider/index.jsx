import React from 'react'
import './styles.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ReactOwlCarousel from 'react-owl-carousel'

import slider1 from '../../assets/images/slider/slider-1.jpg'
import slider2 from '../../assets/images/slider/slider-2.jpg'
import slider3 from '../../assets/images/slider/slider-3.jpg'

const Slider = () => {
  return (
    <div className="slider">
      <ReactOwlCarousel items={1} margin={8} autoplay={true} loop>
        <div className="item">
          <div className="slider-img">
            <img src={slider1} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">Feeling stress or anxious?</h1>
                  <p className="slider-text hidden-xs">
                    We can help you conquer a wide range of psychological and
                    emotional problems.
                  </p>
                  <a href="#test" className="btn btn-success hidden-xs">
                    View All Therapies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slider-img">
            <img src={slider2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">It's time for better help.</h1>
                  <p className="slider-text hidden-xs">
                    We can help you conquer a wide range of psychological and
                    emotional problems.
                  </p>
                  <a href="#test" className="btn btn-success hidden-xs">
                    Schedule A Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slider-img">
            <img src={slider3} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">Meet our psychiatrists</h1>
                  <p className="slider-text hidden-xs">
                    Our psychiatrists are highly skilled to meet your unique
                    needs.
                  </p>
                  <a href="#test" className="btn btn-success hidden-xs">
                    Meet Psychiatrists
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  )
}

export default Slider
