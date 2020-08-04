import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Services.scss'
import { utils } from '../../services'
import { Footer, Header } from '../../common'
import { getServicesPage, getServices } from '../../actions'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg'

class Services extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, servicesPage, services } = this.props
    
    return isLoaded ? (
      <>
        <Header/>
        <ServicesScreen data={servicesPage} assets={assets} services={services} />
        <Footer/>
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getServicesPage, getServices } = this.props

    getServicesPage().then(() => {
      getServices().then(() => {
        this.setState({
          isLoaded: true
        })
      })
    })
  }
}

const ServicesScreen = ({ data, assets, services }) => {
  const origin = process.env.PUBLIC_URL
  const {
    ourExpertiseTitle,
    ourExpertiseItems,
    howWeWorkTitle,
    howWeWorkItems,
    ourPartnersTitle,
    ourPartnersItems,
    whereToStartTitle,
    whereToStartText,
    contactUsLinkText,
  } = data

  console.log('data', data)
  console.log('services', services)

  const renderServiceItems = function (items) {
    if (!items) return null

    return items.map((item, i) => {
      const service = utils.findAsset(services, item)
      if (!service) return null

      const { icon, title, description } = service.fields
      const iconItem = utils.findAsset(assets, icon)

      return (
        <div className="service-wrap" key={service.sys.id}>
          <div className="service">
            <div className="image">
              <img src={iconItem.fields.file.url} alt={iconItem.fields.title} />
            </div>
            <p className="text-h2">{title}</p>
            <div className="separator"></div>
            <p>{description}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <main className="services">

      <section className="expertise">
        <p className="text-h1">{ourExpertiseTitle}</p>
        <div className="content">{
          renderServiceItems(ourExpertiseItems)
        }</div>
      </section>

      <section className="how-we-work">
        <p className="text-h1">{howWeWorkTitle}</p>
        <div className="content">{
          renderServiceItems(howWeWorkItems)
        }</div>
      </section>

      <section className="partners">
        <p className="text-h1">{ourPartnersTitle}</p>
        <div className="content">{
          ourPartnersItems.map((item) => {
            const partner = utils.findAsset(assets, item)
            
            return partner && (
              <img src={partner.fields.file.url} alt={partner.fields.title} key={partner.fields.title} />
            )
          })
        }</div>
      </section>
      
      <section className="contact-us">
        <p className="text-h1">{whereToStartTitle}</p>
        <div className="content">
          <div className="text">{
            utils.renderPlainTextParagraphs(whereToStartText)
          }</div>
          <Link to={origin + "/contact"} className="link">
            <span>{ contactUsLinkText }</span>
            <ArrowRight/>
          </Link>
        </div>
      </section>

    </main>
  )
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  servicesPage: state.servicesPage,
  services: state.services,
})

export default connect(mapStateToProps, { getServicesPage, getServices })(Services)
