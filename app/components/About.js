import React from 'react'
import Image from 'next/image'
import profile from '@/app/Images/profile.jpg'

const About = () => {
    return (
        <div className={`about`}>
            <h1 className='pageHeading'>About</h1>
            <div className="aboutConatiner">
                <div className='aboutPicture'>
                    <Image src={profile} alt="Profile Picture" className='' />
                </div>
                <div className='aboutText'>
                    <p>
                        I’m a MERN stack developer with experience in building
                        optimized and dynamic websites. Passionate about
                        development, I constantly explore new ways to
                        enhance user experiences.
                    </p>

                    <p>
                        Beyond coding, I’m a fitness enthusiast who loves staying active,
                        a traveler capturing my personal perspectives through my
                        camera, and an avid reader of
                        philosophy and self-help books. I’m also interested in
                        the stock market and investing.
                    </p>

                    <p>
                        Feel free to explore my projects or
                        reach out if you'd like to connect
                        for work!
                    </p>
                </div>
            </div>


        </div>
    )
}

export default About