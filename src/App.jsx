import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import Workflow from './components/Workflow'
import Clients from './components/Clients'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <OurServices />
        <Workflow />
        <Clients />
        <Footer />
      </div>
    </>
  )
}

export default App
