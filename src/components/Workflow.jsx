import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
const Workflow = () => {
  return (
    <div id="workflow" className="mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase tracking-wide">
                    Workflow
            </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:mt-20 tracking-wide">
            Streamlined Excellence in {" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Every Step</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) =>(
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Workflow
