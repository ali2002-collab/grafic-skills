import React from 'react';
import { features } from "../constants";

const OurServices = () => {
  return (
    <div id="services" className="relative mt-20  border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          From Design to Delivery: Premium Quality Prints for
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            All Your Needs
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 mb-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="border border-neutral-800 rounded-lg p-6 h-full">
              <div className="flex items-center">
                <div className="flex h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl">{feature.text}</h5>
                </div>
              </div>
              <p className="text-md mt-4 text-neutral-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
