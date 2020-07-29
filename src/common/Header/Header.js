import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'

const Header = ({ isBlack }) => {
  const origin = process.env.PUBLIC_URL

  return (
    <header className={"header " + (isBlack ? "is-black" : "")}>
      <div className="logotype">
        <Link to={origin}><MiosLogotype/></Link>
      </div>
      <nav className="menu">
        <ul className="menu-links text-label text-uppercase">
          <li><Link to={origin + "/services"}>Services</Link></li>
          <li><Link to={origin + "/projects"}>Projects</Link></li>
          <li><Link to={origin + "/contact"}>Contact</Link></li>
          <li><Link to={origin + "/about"}>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header