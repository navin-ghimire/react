import React from 'react'
import { DiAndroid } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Tech = () => {
  return (
    <div className='mt-9 mb-2 space-y-9'>
    <h1 className='text-center py-10 font-semibold text-3xl'>Technologies I Use</h1>
   <div className="my-100 grid grid-cols-auto-fit place-items-center gap-y-9">
      <DiAndroid className='animate-bounce' size={150} />
      <FaJava size={150} />
      <FaReact size={150} />
      <FaVuejs className='animate-ping' size={150} />
      <FaHtml5 className='animate-pulse' size={150} />
      <FaCss3 className='animate-bounce cursor-pointer' size={150} />
      <FaPython className='hover:scale-125 transition-all  duration-300 hover:text-pink-600 cursor-pointer' size={150} />
      <FaGithub size={150} />

    </div>

    </div>
  )
}

export default Tech
