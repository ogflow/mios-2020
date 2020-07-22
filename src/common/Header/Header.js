import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'

const Header = ({ isBlack }) => (
  <header className={"header " + (isBlack ? "is-black" : "")}>
    <div className="logotype">
      <Link to="/"><MiosLogotype/></Link>
    </div>
    <nav className="menu">
      <ul className="menu-links text-label text-uppercase">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header