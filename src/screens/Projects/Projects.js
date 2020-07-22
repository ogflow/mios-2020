import React from 'react'
import './Projects.scss'
import { Footer, Header } from '../../common'

const Projects = () => {
  return (
    <>
      <Header/>
      <ProjectsScreen/>
      <Footer/>
    </>
  )
}

const ProjectsScreen = () => {
  return (
    <div>
      Projects details
    </div>
  )
}

export default Projects