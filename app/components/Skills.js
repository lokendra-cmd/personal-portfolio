import React from 'react'
import Image from 'next/image'
import react from '@/app/Images/react.png'
import express from '@/app/Images/express.png'
import mongodb from '@/app/Images/mongodb.png'
import next from '@/app/Images/nextJS.png'
import tailwind from '@/app/Images/tailwind.png'
import cpp from '@/app/Images/cpp.png'
import javascript from '@/app/Images/javascript.png'
import java from '@/app/Images/java.png'
import html from '@/app/Images/HTML.png'
import css from '@/app/Images/CSS.png'
import python from '@/app/Images/python.png'

const Skills = () => {
    return (
        <div className={`about h-[100%] flex flex-col justify-center bg-[rgb(189,189,189)]  `}>
            {/* <h1 className='text-[2.5rem] text-center mb-[3vh] mt-[8vh]'  style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)' }}>Skills</h1> */}
            <div className="flex justify-center items-center mt-[8vh] gap-[12vw] ">
                <div className='skillsCard h-[70vh] w-[30vw] pt-[2vh] pb-[2vh] '>
                    <h2 className='text-[1.5rem] text-center p-[1vh] font-medium' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}> Web Development Technologies</h2>

                    <div className='ml-[2vw] mt-[3vh] flex flex-col gap-[4vh]'>
                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={react} height={50} width={50} alt='react logo' />
                            <span className='text-[1.2rem] customTextShadow'>React</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={express} height={50} width={50} alt='express logo' />
                            <span className='text-[1.2rem] customTextShadow' >Express</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={mongodb} height={50} width={50} alt='mongoDB logo' />
                            <span className='text-[1.2rem] customTextShadow'>MongoDB</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={next} height={50} width={50} alt='nextJS logo' />
                            <span className='text-[1.2rem] customTextShadow'>Next</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={tailwind} height={50} width={50} alt='tailwind logo' />
                            <span className='text-[1.2rem] customTextShadow'>Tailwind</span>
                        </div>

                    </div>
                </div>

                <div className='skillsCard h-[70vh] w-[30vw] pt-[2vh] pb-[2vh] '>
                    <h2 className='text-[1.5rem] text-center p-[1vh] font-medium' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Languages</h2>

                    <div className='ml-[2vw] mt-[3vh] flex flex-col gap-[2vh]'>
                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={javascript} height={45} width={45} alt='javascript logo' />
                            <span className='text-[1.2rem] customTextShadow'>JavaScript </span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={cpp} height={45} width={45} alt='cpp logo' />
                            <span className='text-[1.2rem] customTextShadow' >C++</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={python} height={45} width={45} alt='python logo' />
                            <span className='text-[1.2rem] customTextShadow'>Python</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={java} height={45} width={45} alt='java logo' />
                            <span className='text-[1.2rem] customTextShadow'>Java</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={html} height={50} width={50} alt='html logo' />
                            <span className='text-[1.2rem] customTextShadow'>Html</span>
                        </div>

                        <div className='flex items-center justify-start gap-[2vw]  '>
                            <Image src={css} height={50} width={50} alt='css logo' />
                            <span className='text-[1.2rem] customTextShadow'>CSS</span>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default Skills