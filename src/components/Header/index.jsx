import React from 'react'
import Logo from './Logo'
import './styles.css'

const Header = () => {
  return (
    <header id="menu-jk" className="scroll_to_fixed_fixed">
      <nav className="">
        {/* <div className="container"> */}
        <div className="row nav-ro">
          <Logo />
          <div
            id="menu"
            className="col-lg-7 col-md-8 d-none d-md-block no-padding"
          >
            <ul>
              <li className="item">
                <a href="index.html">Home</a>
              </li>
              <li className="item">
                <a href="about_us.html">About Us</a>
              </li>
              <li className="item">
                <a href="services.html">Services</a>
              </li>
              <li className="item">
                <a href="blog.html">Blog</a>
              </li>
              <li className="item">
                <a href="gallery.html">Gallery</a>
              </li>
              <li className="item">
                <a href="contact_us.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 d-none d-lg-block">
            <button className="btn btn-success">Book an Appointment</button>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </header>
  )
}

export default Header
