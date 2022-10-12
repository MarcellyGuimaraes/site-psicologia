import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../assets/logo.jpg'
import './styles.css'

const Logo = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src={logo} alt="" />

      <FontAwesomeIcon
        icon="fa-solid fa-bars"
        className="d-block d-md-none small-menu"
      />
    </div>
  )
}

export default Logo
