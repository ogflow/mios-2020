import React from 'react'
import { connect } from 'react-redux'

import './About.scss'
import { utils } from '../../services'
import { Footer, Header } from '../../common'
import { getAboutUsPage, getTeamMembers } from '../../actions'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const { isLoaded } = this.state
    const { assets, aboutUsPage, teamMembers } = this.props
    
    return isLoaded ? (
      <>
        <Header/>
        <AboutScreen data={aboutUsPage} assets={assets} teamMembers={teamMembers} />
        <Footer/>
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getAboutUsPage, getTeamMembers } = this.props

    getAboutUsPage().then(() => {
      getTeamMembers().then(() => {
        this.setState({
          isLoaded: true
        })
      })
    })
  }
}

const AboutScreen = ({ data, assets, teamMembers }) => {
  const {
    pageCover,
    motto,
    aboutUsTitle,
    aboutUsText,
    teamTitle,
    teamMembersItems,
  } = data
  const pageCoverImage = utils.findAsset(assets, pageCover)

  return (
    <main className="about-us-page">

      <div className="page-cover">
        <div className="image">
          <img src={pageCoverImage.fields.file.url} alt={pageCoverImage.fields.title} />
        </div>
        <div className="motto">
          <p className="text-xl">{motto}</p>
        </div>
      </div>

      <section className="description">
        <p className="text-h1">{aboutUsTitle}</p>
        <div className="content">
          { utils.renderPlainTextParagraphs(aboutUsText) }
        </div>
      </section>

      <section className="team">
        <p className="text-h1">{teamTitle}</p>
        <div className="content">{
          teamMembersItems.map((item, i) => {
            const member = utils.findAsset(teamMembers, item)
            if (!member) return null

            const { fullName, jobPosition, photo, photoMask } = member.fields
            const photoItem = utils.findAsset(assets, photo)
            const maskItem = utils.findAsset(assets, photoMask)

            return (
              <div className="member" key={member.sys.id}>
                <div className="image">
                  <img className="mask" src={maskItem.fields.file.url} alt={maskItem.fields.title} />
                  <img className="photo" src={photoItem.fields.file.url} alt={photoItem.fields.title} />
                </div>
                <p className="text-h2">{fullName}</p>
                <p className="job-position">{jobPosition}</p>
              </div>
            )
          })
        }</div>
      </section>

    </main>
  )
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  teamMembers: state.teamMembers,
  aboutUsPage: state.aboutUsPage,
})

export default connect(mapStateToProps, { getAboutUsPage, getTeamMembers })(About)
