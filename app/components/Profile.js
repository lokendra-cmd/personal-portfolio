import React from 'react'
import Image from 'next/image'
import profile from '@/app/Images/profile.avif'
import { motion } from "motion/react"
import { Bricolage_Grotesque } from 'next/font/google'




const bricolageGrotesque = Bricolage_Grotesque({
  weight: '400',
  subsets: ['latin'],
})

const Profile = () => {
  return (
    <>
      <div className={`home h-[105vh] flex gap-[2vw] items-center justify-center pt-[13vh] bg-[rgb(189,189,189)]`}>
        <div className='title w-[48%] flex flex-col justify-center items-center'>
          <h1 className={`text-[3rem] w-[35vw] ${bricolageGrotesque.className}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Hey, I'm Lokendra Kolhe</h1>
          <p className={`text-left w-[35vw] text-[1.5rem] mt-[1vh] `} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>A Passionate Full-Stack Web Developer Crafting Creative Solutions</p>
        </div>

        <div className="profilePicture w-[48%] flex justify-center items-center">
          <div className="image h-[50vh] w-[50vh] rounded-full overflow-hidden shadow-gray-500">
            <Image src={profile} alt="Profile Picture" width={600} height={600}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile