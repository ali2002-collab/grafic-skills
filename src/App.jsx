import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <OurServices />
      </div>
    </>
  )
}

export default App
