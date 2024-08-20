import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clients } from '../constants';

const Clients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const clientsPerPage = 6;

  const handleNext = () => {
    if (startIndex + clientsPerPage < clients.length) {
      setStartIndex(startIndex + clientsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - clientsPerPage);
    }
  };

  const visibleClients = clients.slice(startIndex, startIndex + clientsPerPage);

  return (
    <div id="clients" className="mt-20 tracking-wide">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Clients
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:mt-20 my-10 tracking-wide">
        Crafting Quality - Building Trust with{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Every Client
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {visibleClients.map((client, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 mb-6">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 cursor-pointer">
              <div className="flex items-center">
                <img className="w-24 h-24 mr-10 rounded-full border border-neutral-300" src={client.image} alt={client.company} />
                <span>{client.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 mb-10 space-x-4">
        {startIndex > 0 && (
          <ChevronLeft
            onClick={handlePrev}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            size={32}
            strokeWidth={3} // Increase thickness
          />
        )}
        {startIndex + clientsPerPage < clients.length && (
          <ChevronRight
            onClick={handleNext}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            size={32}
            strokeWidth={3} // Increase thickness
          />
        )}
      </div>
    </div>
  );
};

export default Clients;
