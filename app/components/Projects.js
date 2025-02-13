import React from 'react'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], weight: '200' })

const Projects = () => {
    return (
        <div className={`projects h-[100%] bg-white pt-[13vh] p-[2vw]`}>
            <h1 className='text-[2.5rem] text-center mb-[3vh]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Projects</h1>

            <div className='flex gap-[2vw] mt-[8vh]'>
                <div className="card p-[1.5vw]">
                    <h2 className='text-center text-[1.5rem] customTextShadow'>Newsgram</h2>
                    <div className="image mt-[2vh] h-[35vh]">

                    </div>
                    <div className="description mt-[2vh]">
                        <h3 className='text-[1rem] font-semibold'>Tech Stack: React, Bootstarp</h3>
                        <p className={`${lexend.className}`}>Newsgram is a news website that fetches the latest headlines from the News API and displays them in a clean, card-based layout with infinite scrolling for a seamless browsing experience.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card p-[1.5vw]">
                    <h2 className='text-center text-[1.5rem] customTextShadow'>Algo Trading</h2>
                    <div className="image mt-[2vh]  h-[35vh]">

                    </div>
                    <div className="description mt-[2vh]">
                        <h3 className='text-[1rem] font-semibold'>Tech Stack: React, Python, Django</h3>
                        <p className={`${lexend.className}`}>AlgoTrade offers algorithm-driven buy and sell suggestions using strategies based on RSI, Pivot Points, and Supertrend. It analyzes market trends and provide signals.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card p-[1.5vw]">
                    <h2 className='text-center text-[1.5rem] customTextShadow'>Miles of support</h2>
                    <div className="image mt-[2vh]  h-[35vh]">

                    </div>
                    <div className="description mt-[2vh]">
                        <h3 className='text-[1rem] font-semibold'>Tech Stack: Next, Tailwind, Mongodb</h3>
                        <p className={`${lexend.className}`}>Miles of Support is a platform similar to Patreon, where users can register and receive support from their supporters, creating a space for personalized contributions and engagement.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card p-[1.5vw]">
                    <h2 className='text-center text-[1.5rem] customTextShadow'>Path grid</h2>
                    <div className="image mt-[2vh]  h-[35vh]">

                    </div>
                    <div className="description mt-[2vh]">
                        <h3 className='text-[1rem] font-semibold'>Tech Stack: Next, Express, Tailwind, Mongodb</h3>
                        <p className={`${lexend.className}`}>PathGrid is a Linktree clone, allowing users to share all their links in one place for easy access.</p>

                    </div>
                    <div className="buttons">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

               

            </div>
        </div>
    )
}

export default Projects