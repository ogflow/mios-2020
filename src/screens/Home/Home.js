import React from 'react'
import './Home.scss'
import { Footer, Header } from '../../common'

const Home = () => {
  return (
    <>
      <Header/>
      <HomeScreen/>
      <Footer/>
    </>
  )
}

const HomeScreen = () => {
  return (
    <div>
      home
    </div>
  )
}

export default Home
