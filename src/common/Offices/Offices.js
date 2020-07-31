import React from 'react'
import { connect } from 'react-redux'

import './Offices.scss'
import { utils } from '../../services'
import { getOffices } from '../../actions'

class Offices extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, offices, officesRefs } = this.props
    
    return isLoaded ? (
      <OfficesList data={offices} officesRefs={officesRefs} assets={assets} />
    ) : (
      <p>is loading.....</p>
    )
  }
  
  componentDidMount () {
    const { getOffices } = this.props

    getOffices().then(() => {
      this.setState({
        isLoaded: true
      })
    })
  }
}

const OfficesList = ({ data, officesRefs, assets }) => (
  <div className="offices-list">{
    officesRefs.map((item) => {
      const office = utils.findAsset(data, item)
      if (!office) return null

      const mapImage = utils.findAsset(assets, office.fields.mapImage)
      const { title, mapLinkUrl, fullAddress } = office.fields

      return office && mapImage && (
        <div className="office" key={office.sys.id}>
          <a className="map-image" href={ mapLinkUrl } target="_blank" rel="noopener noreferrer">
            <img src={mapImage.fields.file.url} alt={mapImage.fields.title} />
          </a>
          <p className="text-h2">{ title }</p>
          <div className="divider"></div>
          { fullAddress.content.map(p => (
            <p key={p.content[0].value}>
              {p.content[0].value}
            </p>
          )) }
        </div>
      )
    })
  }</div>
)

const mapStateToProps = (state) => ({
  assets: state.assets,
  offices: state.offices,
})

export default connect(mapStateToProps, { getOffices })(Offices)