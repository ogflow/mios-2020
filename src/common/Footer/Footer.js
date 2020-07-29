import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow_up_circle.svg'

class Footer extends React.Component {
  render() {
    const socialMediaLinks = socialMediaItems.map((item) =>
      <li key={item.href}>
        <a href={item.href}>
          {item.name}
        </a>
      </li>
    )
    const origin = process.env.PUBLIC_URL

    return (
      <footer className="footer">
        <div className="logotype">
          <Link to={origin}><MiosLogotype/></Link>
        </div>
        <div className="contacts">
          <h3 className="text-subheading">Mios Agency</h3>
          <p className="text-caption">
            <a href="tel:+358451235678">+358 45 123 56 78</a>
          </p>
          <p className="text-caption">
            <a href="mailto:hello@mios.fi">hello@mios.fi</a>
          </p>
        </div>
        <nav className="menu">
          <ul className="menu-links text-h2">
            <li><Link to={origin + "/services"}>Services</Link></li>
            <li><Link to={origin + "/projects"}>Projects</Link></li>
            <li><Link to={origin + "/contact"}>Contact</Link></li>
            <li><Link to={origin + "/about"}>About</Link></li>
          </ul>
        </nav>
        <div className="aside-block">
          <div className="scroll-trigger" onClick={this.scrollToPageTop}>
            <ArrowUp/>
          </div>
          <ul className="social-links">
            {socialMediaLinks}
          </ul>
          <span className="text-caption">© Mios Agency. All Rights Reserved</span>
        </div>
      </footer>
    )
  }

  scrollToPageTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
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

export default Footer