import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_next_project.svg'
import './Details.scss'
import { utils } from '../../services'
import { Button, Footer, Header } from '../../common'
import { getProjects, getProjectsPage, getContentBlocks } from '../../actions'

const TYPE_TEXT_IMAGE = 'Text + Image'
const TYPE_IMAGE_TEXT = 'Image + Text'
const TYPE_HERO_IMAGE_TEXT = 'Hero-Image + Text'
const TYPE_TWO_IMAGES_TEXT = 'Two Images + Text'
const TYPE_HIGHLIGHTED_TEXT = 'Highlighted Text'

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
    const { assets, contentBlocks, projects, projectsPage,  match: { params: { projectId } }} = this.props
    const project = projects && projects.find(x => x.fields.urlSlug === projectId)

    return isLoaded ? (
      project && projectsPage ? (
        <>
          <Header isBlack />
          <DetailsScreen data={project} assets={assets} contentBlocks={contentBlocks} projects={projects} projectsItems={projectsPage.projectsItems} />
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
    const { getProjects, getProjectsPage, getContentBlocks } = this.props

    getProjects().then(() => {
      getContentBlocks().then(() => {
        getProjectsPage().then(() => {
          this.setState({
            isLoaded: true
          })
        })
      })
    })
  }
}

const DetailsScreen = ({ data, assets, contentBlocks, projects, projectsItems }) => {
  const origin = process.env.PUBLIC_URL
  const {
    cover,
    coverText,
    category,
    title,
    description,
    tags,
    content,
  } = data.fields
  const coverImg = utils.findImage(assets, cover)

  const renderNextProjectLink = () => {
    if (projectsItems.length <= 1) return null

    const projectRef = utils.findAsset(projectsItems, data)
    const projectIndex = projectsItems.indexOf(projectRef)
    const nextProjectIndex = projectIndex + 1 === projectsItems.length ? 0 : projectIndex + 1
    const nextProjectRef = projectsItems[nextProjectIndex]

    const nextProject = utils.findAsset(projects, nextProjectRef)
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

        <div className="content-blocks">{
          content.map((item, i) => {
            const block = utils.findAsset(contentBlocks, item)
            
            return <ContentBlock assets={assets} data={block} key={i} />
          })
        }</div>

      </div>

      <div className="contact">
        <div className="text">
          <p className="text-h1">Let's make great things together!</p>
          <p className="text-body">Become one of the satisfied clients, partners, and successful businesses that we have had the pleasure of working with.</p>
          <Link to={origin + "/contact"}>
            <Button style={{ '--accent-color': 'black', '--contrast-color': 'white' }}>Get in touch</Button>
          </Link>
        </div>
      </div>

      { renderNextProjectLink() }

    </main>
  )
}

const ContentBlock = ({ assets, data }) => {
  const { type, title, text, images } = data.fields
  
  if (type === TYPE_TEXT_IMAGE || type === TYPE_IMAGE_TEXT || type === TYPE_HERO_IMAGE_TEXT) {
    const image = utils.findImage(assets, images[0])
    const classNames = 'block'
      + (type === TYPE_HERO_IMAGE_TEXT
          ? ' block_hero'
          : ' block_image-text')
      + (type === TYPE_TEXT_IMAGE ? ' is-reversed' : '')
    
    return (
      <div className={classNames}>
        <div className="image">
          <div className="image-wrap">
            <img src={image.src} alt={image.alt}/>
          </div>
          { !!image.caption && (
            <p className="text-caption">{image.caption}</p>
          )}
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <div className="description">{
            utils.renderPlainTextParagraphs(text)
          }</div>
        </div>
      </div>
    )
  }

  if (type === TYPE_HIGHLIGHTED_TEXT) {
    return (
      <div className="block block_text">
        <div className="text">
          <div className="description text-h2">{
            utils.renderPlainTextParagraphs(text)
          }</div>
          { title && (
            <p className="text-label">{title}</p>
          )}
        </div>
      </div>
    )
  }

  if (type === TYPE_TWO_IMAGES_TEXT) {
    return (
      <div className="block block_double">
        <div className="images-row">{
          images.map((img, i) => {
            const { src, alt, caption } = utils.findImage(assets, img)
            return (
              <div className="image" key={i}>
                <div className="image-wrap">
                  <img src={src} alt={alt}/>
                </div>
                { !!caption && (
                  <p className="text-caption">{caption}</p>
                )}
              </div>
            )
          })
        }</div>
        <div className="text">
          <p className="text-h2">{title}</p>
          <div className="description">{
            utils.renderPlainTextParagraphs(text)
          }</div>
        </div>
      </div>
    )
  }

  return null
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  contentBlocks: state.contentBlocks,
  projects: state.projects,
  projectsPage: state.projectsPage,
})

export default connect(mapStateToProps, { getProjects, getProjectsPage, getContentBlocks })(Details)