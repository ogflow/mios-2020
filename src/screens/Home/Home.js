import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Home.scss'
import { ReactComponent as MiosLogotype } from '../../assets/icons/mios.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg'

import { Button, Footer, Header, Offices } from '../../common'
import { utils } from '../../services'
import { getHomePage, getProjects } from '../../actions'


class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, homePage, projects } = this.props
    
    return isLoaded ? (
      <>
        <Header/>
        <HomeScreen data={homePage} assets={assets} projects={projects} />
        <Footer/>
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getHomePage, getProjects } = this.props

    getHomePage().then(() => {
      getProjects().then(() => {
        this.setState({
          isLoaded: true
        })
      })
    })
  }
}

const HomeScreen = ({ data, assets, projects }) => {
  const origin = process.env.PUBLIC_URL
  const {
    companySlogan,
    servicesTitle,
    servicesItems,
    servicesButtonText,
    projectsTitle,
    projectsItems,
    readMoreText,
    projectsLinkText,
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
      <main className="home-page">
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
            <Link to={origin + "/services"} className="link">
              <Button>{servicesButtonText}</Button>
            </Link>
          </section>

          <section className="projects">
            <p className="text-h1 title">{projectsTitle}</p>
            <div className="projects-list">{
              projectsItems.map((item, i) => {
                const project = utils.findAsset(projects, item)
                const {
                  thumbnail, title, category, description, urlSlug
                } = project.fields
                const { src, alt } = utils.findImage(assets, thumbnail)

                return (
                  <Link to={origin + `/projects/${urlSlug}/details`} className="project-item" key={i}>
                    <div className="image">
                      <img src={src} alt={alt} />
                    </div>
                    <p className="text-label">{category}</p>
                    <p className="text-h1">{title}</p>
                    <div className="description">{
                      utils.renderPlainTextParagraphs(description)
                    }</div>
                    <div className="link">
                      <span>{readMoreText}</span>
                      <ArrowRight/>
                    </div>
                  </Link>
                )
              })
            }</div>
            <Link to={origin + "/projects"} className="link">
              <Button>{projectsLinkText}</Button>
            </Link>
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
  projects: state.projects,
})

export default connect(mapStateToProps, { getHomePage, getProjects })(Home)