import React from 'react'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], weight: '200' })

const Projects = () => {
    return (
        <div className={`projects`}>
            <h1 className='pageHeading'>Projects</h1>

            <div className='projectsContainer'>
                <div className="card">
                    <h2>Newsgram</h2>
                    <div className="image">

                    </div>
                    <div className="description">
                        <h3>Tech Stack: React, Bootstarp</h3>
                        <p className={`${lexend.className}`}>Newsgram is a news website that fetches the latest headlines from the News API and displays them in a clean, card-based layout with infinite scrolling for a seamless browsing experience.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card ">
                    <h2 >Algo Trading</h2>
                    <div className="image">

                    </div>
                    <div className="description">
                        <h3>Tech Stack: React, Python, Django</h3>
                        <p className={`${lexend.className}`}>AlgoTrade offers algorithm-driven buy and sell suggestions using strategies based on RSI, Pivot Points, and Supertrend. It analyzes market trends and provide signals.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card">
                    <h2 >Miles of support</h2>
                    <div className="image ">

                    </div>
                    <div className="description">
                        <h3>Tech Stack: Next, Tailwind, Mongodb</h3>
                        <p className={`${lexend.className}`}>Miles of Support is a platform similar to Patreon, where users can register and receive support from their supporters, creating a space for personalized contributions and engagement.</p>

                    </div>
                    <div className="buttons ">
                        <button href="#" className=" btn">Visit</button>
                        <button href="#" className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card">
                    <h2 >Path grid</h2>
                    <div className="image">

                    </div>
                    <div className="description">
                        <h3>Tech Stack: Next, Express, Tailwind, Mongodb</h3>
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