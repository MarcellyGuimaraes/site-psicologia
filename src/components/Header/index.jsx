import React from 'react'
import Logo from './Logo'
import './styles.css'

const Header = () => {
  return (
    <header id="menu-jk" className="scroll_to_fixed_fixed">
      <nav className="container">
        <div className="row nav-ro">
          <Logo />

          <div
            id="menu"
            className="col-lg-7 col-md-8 d-none d-md-block no-padding"
          >
            <ul>
              <li className="item">
                <a href="#teste">Home</a>
              </li>
              <li className="item">
                <a href="#teste">About Us</a>
              </li>
              <li className="item">
                <a href="#teste">Services</a>
              </li>
              <li className="item">
                <a href="#teste">Blog</a>
              </li>
              <li className="item">
                <a href="#teste">Gallery</a>
              </li>
              <li className="item">
                <a href="#teste">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 d-none d-lg-block">
            <button className="btn btn-success">Book an Appointment</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
