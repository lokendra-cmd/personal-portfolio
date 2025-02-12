import React from 'react'
import { fadeInFromBottom, fadeOutToTop } from '@/app/Animation/animations'
import { motion } from "motion/react"

const About = () => {
    return (
        <div className={`about h-[100%] flex flex-col justify-center bg-white `}>
            <h1 className='text-[2.5rem] text-center mb-[3vh]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>About</h1>
            <div className="flex justify-center items-center mt-[5vh] gap-[10vw] ">
                <div className='h-[25vw] w-[25vw] bg-[rgb(189,189,189)] shadow-lg rounded bg-opacity-50'>

                </div>
                <div className='w-[30vw] flex flex-col items-center'>
                    <p className='text-[1.2rem] my-[1vh]'>
                        I’m a MERN stack developer with experience in building
                        optimized and dynamic websites. I’m passionate about
                        development and always exploring new ways to enhance
                        user experiences.
                    </p>

                    <p className='text-[1.2rem] my-[1vh]'>
                        Apart from coding, I’m a fitness enthusiast who loves
                        staying active. I enjoy reading books to keep learning
                        and am also interested in the stock market and investing.
                    </p>

                    <p className='text-[1.2rem] my-[1vh]'>
                        Feel free to explore my projects or reach
                        out if you'd like to connect for work!
                    </p>
                </div>
            </div>


        </div>
    )
}

export default About