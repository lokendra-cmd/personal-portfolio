import React from 'react'
import { fadeInFromBottom, fadeOutToTop } from '@/app/Animation/animations'
import { motion } from "motion/react"

const About = () => {
    return (
        <div className={`about h-screen bg-white p-[2vw]`}>
            <h1 className='text-[2rem] text-left ml-[22vw]'>About</h1>
            <div className="flex justify-center mt-[5vh] gap-[10vw]">
                <div className='h-[25vw] w-[25vw] bg-[rgb(189,189,189)]'>

                </div>
                <div className='w-[30vw] flex items-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium eligendi quo vero voluptatem nam ratione, doloribus officia facilis iure minus amet odit odio obcaecati animi nisi et quidem alias. Accusamus error consequatur unde quo, cumque nesciunt ducimus. Minus, velit.
                </div>
            </div>


        </div>
    )
}

export default About