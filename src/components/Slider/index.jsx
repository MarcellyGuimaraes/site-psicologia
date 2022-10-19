import React from 'react'
import { slider } from '../../assets/api'
import './styles.css'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ReactOwlCarousel from 'react-owl-carousel'

const Slider = () => {
  return (
    <div className="slider">
      <ReactOwlCarousel items={1} margin={8} autoplay={true} loop>
        {slider.map((i) => (
          <div key={i.id} className="item">
            <div className="slider-img">
              <img src={i.img} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                  <div className="slider-captions">
                    <h1 className="slider-title">{i.title}</h1>
                    <p className="slider-text hidden-xs">{i.text}</p>
                    <a href={i.link} className="btn btn-success hidden-xs">
                      {i.text_button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
  )
}

export default Slider
