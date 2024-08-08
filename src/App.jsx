import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <OurServices />
        <Workflow />
      </div>
    </>
  )
}

export default App
