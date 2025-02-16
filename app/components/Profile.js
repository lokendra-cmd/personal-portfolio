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
      <div className={`profile`}>
        <div className='profileText'>
          <h1 className={`profileTitle ${bricolageGrotesque.className}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Hey, I'm Lokendra Kolhe</h1>
          <p className={`profileSubtitle`}>A Passionate Full-Stack Web Developer Crafting Creative Solutions</p>
        </div>

        <div className="profilePicture">
            <Image src={profile} alt="Profile Picture" className='picture' />
        </div>
      </div>
    </>
  )
}

export default Profile