import React, { useState } from 'react'
import { header } from '../../assets/api.js'
import './styles.css'
import logo from '../../assets/images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { Link } from 'react-router-dom'

import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  fontawesome.library.add(faBars)

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleClick = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <header id="menu-jk" className="scroll_to_fixed_fixed">
      <div className="container">
        <div className="row nav-ro">
          {/* Logo */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <a href="/">
              <img src={logo} alt="" />
            </a>

            <FontAwesomeIcon
              onClick={handleClick}
              icon="bars"
              className="d-block d-md-none small-menu"
            />
          </div>

          {/* Menu */}
          <div
            id="menu"
            className={`col-lg-7 col-md-8 no-padding ${
              isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
            }`}
            // className="col-lg-7 col-md-8 d-none d-md-block no-padding navigation-menu"
          >
            <ul>
              {header.map((item) => (
                <li key={item.id} className="item_li">
                  <Link to={item.link}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão */}
          <div className="col-sm-2 d-none d-lg-block">
            <a href="/fale_conosco" className="btn btn-success">
              Agente uma visita
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
