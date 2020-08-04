import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Home.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'

import { Button, Footer, Header, Offices } from '../../common'
import { utils } from '../../services'
import { getHomePage } from '../../actions'


class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, homePage } = this.props
    
    return isLoaded ? (
      <>
        <Header/>
        <HomeScreen data={homePage} assets={assets} />
        <Footer/>
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getHomePage } = this.props

    getHomePage().then(() => {
      this.setState({
        isLoaded: true
      })
    })
  }
}

const HomeScreen = ({ data, assets, offices }) => {
  const origin = process.env.PUBLIC_URL
  const {
    companySlogan,
    servicesTitle,
    servicesItems,
    servicesButtonText,
    partnersTitle,
    partnersItems,
    officesTitle,
    officesItems,
  } = data

  const servicesRef = useRef()
  const [ transformEnabled, setTransformEnabled ] = useState(false)
  const [ startPoint, setStartPoint ] = useState(0)
  const [ endPoint, setEndPoint ] = useState(0)
  const [ scrollTop, setScrollTop ] = useState(0)
  
  const onScroll = e => {
    setScrollTop(e.target.documentElement.scrollTop)
  }

  const onScrollInit = e => {
    if (!servicesRef.current) return

    const offsetTop = servicesRef.current.offsetTop
    const height = servicesRef.current.offsetHeight
    const viewportFactor = window.innerHeight / 2

    setStartPoint(offsetTop - viewportFactor)
    setEndPoint(offsetTop + height - viewportFactor)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      setTransformEnabled(scrollTop > startPoint && scrollTop < endPoint + window.innerHeight)
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', onScrollInit)
  }, [])

  const calculateIsCentered = (i) => {
    const length = servicesItems.length
    const itemArea = (endPoint - startPoint) / length
    const ownAreaStart = startPoint + itemArea * i

    return scrollTop > ownAreaStart
  }
  
  return (
    <>
      <main className="home">
        <div className="content">

          <div className="social-media-links">{
            socialMediaItems.map((item) =>
              <a className="link" href={item.href} key={item.href}>
                <span className="text-subheading">
                  {item.name}
                </span>
              </a>
            )
          }</div>

          <section className="company-slogan">
            <p className="text-xl">{
              companySlogan.content[0].content.map((t, i) => {
                const isAccented = t.marks.length && t.marks[0].type === 'bold'
                
                return (
                  <span className={isAccented ? 'is-accented' : null} key={i}>{t.value}&shy;</span>
                )
              })
            }</p>
          </section>
          
          <section className="services">
            <p className="text-h1">{servicesTitle}</p>
            <ul className="services-list" ref={servicesRef}>{
              servicesItems.map((item, i) => {
                return (
                  <li key={item} className={ 'text-xl' + (
                    transformEnabled && calculateIsCentered(i)
                      ? ' is-centered'
                      : '' ) }>
                    {item}
                  </li>
                )
              })
            }</ul>
            <Button>{servicesButtonText}</Button>
          </section>

          <div className="get-in-touch">
            <Link to={origin + "/contact"} className="link text-label">Get in touch</Link>
          </div>

          <section className="partners">
            <p className="text-h1">{partnersTitle}</p>
            <div className="partners-logotypes">{
              partnersItems.map((item) => {
                const partner = utils.findAsset(assets, item)
                
                return partner && (
                  <img src={partner.fields.file.url} alt={partner.fields.title} key={partner.fields.title} />
                )
              })
            }</div>
          </section>

          <section className="offices">
            <p className="text-h1">{officesTitle}</p>
            <Offices officesRefs={officesItems} assets={assets} />
          </section>

        </div>

        <div className={ 'logotype-metamorphose ' + (scrollTop > 50 ? 'is-out' : '') }>
          <MiosLogotype/>
        </div>

      </main>
    </>
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

const mapStateToProps = (state) => ({
  assets: state.assets,
  homePage: state.homePage,
})

export default connect(mapStateToProps, { getHomePage })(Home)