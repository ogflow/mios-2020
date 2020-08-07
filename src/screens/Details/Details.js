import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_next_project.svg'
import './Details.scss'
import { utils } from '../../services'
import { Footer, Header } from '../../common'
import { getProjects } from '../../actions'

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  render () {
    const origin = process.env.PUBLIC_URL
    const { isLoaded } = this.state
    const { assets, projects, match: { params: { projectId } } } = this.props
    const project = projects && projects.find(x => x.fields.urlSlug === projectId)
    
    return isLoaded ? (
      project ? (
        <>
          <Header isBlack />
          <DetailsScreen data={project} assets={assets} projects={projects} />
          <Footer />
        </>
      ) : (
        <Redirect to={origin + "/projects"}/>
      )
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getProjects } = this.props

    getProjects().then(() => {
      this.setState({
        isLoaded: true
      })
    })
  }
}

const DetailsScreen = ({ data, assets, projects }) => {
  const origin = process.env.PUBLIC_URL
  const {
    cover,
    coverText,
    category,
    title,
    description,
    tags,
  } = data.fields
  const coverImg = utils.findImage(assets, cover)


  const renderNextProjectLink = () => {
    const projectIndex = projects.indexOf(data)
    const nextProjectIndex = projectIndex + 1 !== projects.length ? projectIndex + 1 : 0
    const nextProject = projects.length > 1 ? projects[nextProjectIndex] : null

    if (!nextProject) return null

    const { cover, title, urlSlug } = nextProject.fields
    const { src, alt } = utils.findImage(assets, cover)

    return (
      <Link to={origin + `/projects/${urlSlug}/details`} className="next-project">
        <div className="text-content">
          <p className="text-label text-uppercase">Next</p>
          <p className="text-h1">
            <span>{title}</span>
            <ArrowRight />
          </p>
        </div>
        <img src={src} alt={alt} />
      </Link>
    )
  }

  return (
    <main className="details-page">

      <div className="cover">
        <div className="cover-text">
          <p className="text-h1">{coverText}</p>
        </div>
        <div className="cover-image">
          <img src={coverImg.src} alt={coverImg.alt} />
        </div>
      </div>

      <div className="content">

        <div className="brief">
          <p className="text-label">{category}</p>
          <p className="text-h1">{title}</p>
          <div className="separator"></div>
          <div className="description">{
            utils.renderPlainTextParagraphs(description)
          }</div>
          <ul className="tags-list">{
            tags.map((tag, i) => (
              <li className="tag" key={i}>{tag}</li>
            ))
          }</ul>
        </div>

      </div>

      { renderNextProjectLink() }

    </main>
  )
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  projects: state.projects,
})

export default connect(mapStateToProps, { getProjects })(Details)