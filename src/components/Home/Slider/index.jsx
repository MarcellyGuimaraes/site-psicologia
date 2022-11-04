import { Swiper, SwiperSlide } from 'swiper/react'
import './styles.css'

// Import Swiper styles
import 'swiper/css'
import { Pagination } from 'swiper'
import { slider } from '../../../assets/api'

const SliderTest = () => {
  return (
    <div className="slider">
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slider.map((i) => (
          <SwiperSlide key={i.id} className="item">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderTest
