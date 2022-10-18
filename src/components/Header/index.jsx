import React from 'react'
import { header } from '../../assets/api.js'
import Logo from './Logo'
import './styles.css'

const Header = () => {
  return (
    <header id="menu-jk" className="scroll_to_fixed_fixed">
      <nav className="">
        <div className="container">
          <div className="row nav-ro">
            <Logo />
            <div
              id="menu"
              className="col-lg-7 col-md-8 d-none d-md-block no-padding"
            >
              <ul>
                {header.map((item) => (
                  <li key={item.id} className="item_li">
                    <a href={item.link}>{item.content}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-2 d-none d-lg-block">
              <button className="btn btn-success">Book an Appointment</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
