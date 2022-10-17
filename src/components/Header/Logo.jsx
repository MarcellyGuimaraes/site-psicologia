import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import React from 'react'
import logo from '../../assets/logo.jpg'
import './styles.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faBars)

const Logo = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src={logo} alt="" />
      <FontAwesomeIcon icon="bars" className="d-block d-md-none small-menu" />
    </div>
  )
}

export default Logo
