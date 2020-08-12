import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'

const Header = ({ isBlack }) => {
  const origin = process.env.PUBLIC_URL
  const [ menuState, setMenuState ] = useState('hidden')

  const onMenuClick = () => {
    switch (menuState) {
      case 'hidden':
        setMenuState('fade-in')
        document.body.classList.add('no-scroll')
        return setTimeout(() => {
          setMenuState('displayed')
        }, 490)
      case 'displayed':
        setMenuState('fade-out')
        return setTimeout(() => {
          setMenuState('hidden')
          document.body.classList.remove('no-scroll')
        }, 490)
      default:
        return
    }
  }

  return (
    <header className={"header " + (isBlack ? "is-black" : "")}>

      <div className="logotype">
        <Link to={origin}><MiosLogotype/></Link>
      </div>
      
      <div className={"hamburger " + menuState} onClick={onMenuClick}>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={"menu " + menuState}>
        <div className="menu-content">
          <ul className="menu-links text-label text-uppercase">
            <li><Link to={origin + "/services"}>Services</Link></li>
            <li><Link to={origin + "/projects"}>Projects</Link></li>
            <li><Link to={origin + "/contact"}>Contact</Link></li>
            <li><Link to={origin + "/about"}>About</Link></li>
          </ul>
          <div className="social-media-links">{
            socialMediaItems.map((item) =>
              <a className="link" href={item.href} key={item.href}>
                <span className="text-caption">
                  {item.name}
                </span>
              </a>
            )
          }</div>
        </div>
      </nav>

    </header>
  )
}

const socialMediaItems = [
  {
    name: "Instagram",
    href: "https://instagram.com"
  },
  {
    name: "Facebook",
    href: "https://facebook.com"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com"
  },
  {
    name: "Behance",
    href: "https://behance.com"
  }
]

export default Header