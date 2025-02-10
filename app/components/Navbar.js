
import React from 'react'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })



const Navbar = () => {
  return (
    <div className="navbar flex justify-end items-center h-[10vh]">
        <ul className={`list-none font-poppins text-[1.3rem] mt-[4vh] ${orbitron.className}`}>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>Home</li>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>About</li>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>Skills</li>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>Projects</li>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>Education</li>
            <li className='inline mx-[2vw] cursor-pointer hover:scale-110 hover:text-gray-500'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar