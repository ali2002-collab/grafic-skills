import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import logo from "../assets/fresh-burger.png";

const HeroSection = () => {
  return (
    
    <div className="flex flex-col items-center border-b border-neutral-800">
         <img className="h-48 w-48 mr-2" src={logo} alt="logo" />
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
            <a href="#services" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Our Services</a>
        </div>
        <div className="flex mt-10 justify-center mb-10">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
              >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
              >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
        </div>
      
        
        
    </div>
  )
}

export default HeroSection
