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
    <main className="home">
      <section>home content</section>
    </main>
  )
}

export default Home
