import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            One Company Limitless
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
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
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">About Us</a>
        </div>
      
        
        
    </div>
  )
}

export default HeroSection
