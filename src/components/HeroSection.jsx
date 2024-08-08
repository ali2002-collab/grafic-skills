import React from 'react'
import photo1 from '../assets/profile-pictures/photo1.jpg';
import photo2 from '../assets/photo2.jpg'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            One Company Limitless
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {" "}
                Solution!
            </span>
        </h1>
     
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Welcome to Grafic Skills!!! Based in Lahore - 
                Pakistan, Grafic Skills Offset Printers is a 
                professionally managed and renowned 
                printing solution provider ,committed to 
                providing impressive services in line with the 
                latest technological trends.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Our Services</a>
        </div>
        <div className="flex mt-10 justify-center">
          <img src={photo1} className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4" />
          <img src={photo2} className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4" />
        </div>
      
        
        
    </div>
  )
}

export default HeroSection
