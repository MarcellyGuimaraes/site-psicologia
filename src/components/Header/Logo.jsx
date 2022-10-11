import React from 'react'
import logo from '../../assets/logo.jpg'
import './styles.css'

const Logo = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src={logo} alt="" />
      <a data-toggle="collapse" data-target="#menu" href="#menu">
        <i className="fas d-block d-md-none small-menu fa-bars"></i>
      </a>
    </div>
  )
}

export default Logo
