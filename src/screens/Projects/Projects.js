import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as ArrowUp } from '../../assets/icons/arrow_up.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg'

import './Projects.scss'
import { utils } from '../../services'
import { Header } from '../../common'
import { getProjectsPage, getProjects } from '../../actions'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      hasBlackText: false,
    }
    this.handleTextColorChange = this.handleTextColorChange.bind(this)
  }

  handleTextColorChange (hasBlackText) {
    this.setState({
      hasBlackText: hasBlackText
    })
  }

  render () {
    const { isLoaded, hasBlackText } = this.state
    const { assets, projectsPage, projects } = this.props
    
    return isLoaded ? (
      <>
        <Header isBlack={hasBlackText} />
        <ProjectsScreen data={projectsPage} assets={assets} projects={projects} onTextColorChange={this.handleTextColorChange} hasBlackText={hasBlackText} />
      </>
    ) : (
      <p>is loading.....</p>
    )
  }

  componentDidMount () {
    const { getProjectsPage, getProjects } = this.props

    getProjectsPage().then(() => {
      getProjects().then(() => {
        this.setState({
          isLoaded: true
        })
      })
    })
  }
}

const ProjectsScreen = ({ data, assets, projects, onTextColorChange, hasBlackText }) => {
  const origin = process.env.PUBLIC_URL
  const {
    projectsItems,
    readMoreText
  } = data

  const [ index, setIndex ] = useState(0)
  const [ transition, setTransition ] = useState(false)

  const projectRef = projectsItems[index]
  const project = utils.findAsset(projects, projectRef)
  const prevProjectRef = projectsItems[index - 1]
  const nextProjectRef = projectsItems[index + 1]

  useEffect(() => {
    onTextColorChange(project.fields.hasBlackText)
  }, [index, onTextColorChange, project])

  const renderProjectItem = (item) => {
    const {
      cover, title, description, category, customAccentColor, urlSlug
    } = item.fields
    const { src, alt } = utils.findImage(assets, cover)

    return (
      <>
        <div className="content" style={customAccentColor && { '--project-accent-color': customAccentColor }}>
          <p className="text-label text-uppercase">{category}</p>
          <p className="text-h1">{title}</p>
          <div className="separator"></div>
          <div className="description">{
            utils.renderPlainTextParagraphs(description)
          }</div>
          <Link to={origin + `/projects/${urlSlug}/details`} className="link">
            <span>{readMoreText}</span>
            <ArrowRight/>
          </Link>
        </div>
        <div className="cover-mask"></div>
        <img className="cover" src={src} alt={alt} />
      </>
    )
  }

  const handleChange = (nextIndex) => {
    if (transition) return

    setIndex(nextIndex)
    setTransition(true)
    setTimeout(() => {
      setTransition(false)
    }, 600)
  }

  return (
    <main className={"projects-page" + (!hasBlackText ? ' is-white' : '')}>

      <div className="actions" style={project.fields.customAccentColor && { '--project-accent-color': project.fields.customAccentColor }}>
        <div className={"action-button previous" + (!prevProjectRef ? ' off' : '')} onClick={() => handleChange(index - 1)}>
          <ArrowUp/>
        </div>
        <div className={"action-button next" + (!nextProjectRef ? ' off' : '')} onClick={() => handleChange(index + 1)}>
          <ArrowDown/>
        </div>
      </div>

      <div className="slider">{
        projectsItems.map((item, i) => {
          const isVisible = [projectRef, prevProjectRef, nextProjectRef].includes(item)
          
          if (!isVisible) {
            return (
              <div key={i} className="project-item"></div>
            )
          }

          const projectItem = utils.findAsset(projects, item)

          return (
            <div key={i} className={"project-item "
              + (!projectItem.fields.hasBlackText ? 'is-white ' : '')
              + (i === index ? 'current' : i === index - 1 ? 'previous' : i === index + 1 ? 'next' : '')
            }>
              { renderProjectItem(projectItem) }
            </div>
          )
        })
      }</div>

    </main>
  )
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  projectsPage: state.projectsPage,
  projects: state.projects
})

export default connect(mapStateToProps, { getProjectsPage, getProjects })(Projects)