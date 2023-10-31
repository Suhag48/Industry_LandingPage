// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Service from "./Components/Service"
import Feedback from "./Components/Feedback"
import MarketSectors from "./Components/MarketSectors"
import WorkHistory from "./Components/WorkHistory"
import DoneProject from "./Components/DoneProject"
import BlogPost from "./Components/BlogPost"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Feedback />
      <MarketSectors />
      <WorkHistory />
      <DoneProject />
      <BlogPost />
      <Contact />
      <Footer />
    </>
  )
}

export default App
