import React, { useState } from 'react'
import Image from 'next/image'
import newsgram_demo from '@/app/Images/newsgram_demo.jpg'
import inspect_demo from '@/app/Images/inspect_demo.jpg'
import milesofsupport from '@/app/Images/milesofsupport.png'
import { Lexend } from 'next/font/google'
import VideoModal from './VideoModal'

const lexend = Lexend({ subsets: ['latin'], weight: '200' })

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const openVideoModal = (videoId) => {
        setCurrentVideoId(videoId);
        setIsModalOpen(true);
    };

    return (
        <div className={`projects`}>
            <h1 className='pageHeading'>Projects</h1>

            <div className='projectsContainer'>
                <div className="card">
                    <h2>Newsgram</h2>
                    <div className="image">
                    <Image src={newsgram_demo} height={200} width={200} alt="Newsgram" className='projectImages' />
                    </div>
                    <div className="description">
                        <h3>Tech Stack: NextJS, TailwindCSS</h3>
                        <p className={`${lexend.className}`}>Newsgram is a news website that fetches the latest headlines from the News API and displays them in a clean, card-based layout with infinite scrolling for a seamless browsing experience.</p>

                    </div>
                    <div className="buttons ">
                        <button onClick={() => window.open("https://newsgram-phi.vercel.app/", "_blank")} className=" btn">Visit</button>
                        <button onClick={() => window.open("https://github.com/lokendra-cmd/Newsgram", "_blank")}  className=" btn">GitHub</button>
                    </div>
                </div>

                <div className="card ">
                    <h2 >Inspect</h2>
                    <div className="image">
                    <Image src={inspect_demo} height={200} width={200} alt="Newsgram" className='projectImages' />
                    </div>
                    <div className="description">
                        <h3>Tech Stack: React, Python, Flask</h3>
                        <p className={`${lexend.className}`}>INSPECT analyzes stocks fundamentally, compares two stocks side by side, and recommends similar stocks based on key metrics, helping investors make informed decisions easily. </p>

                    </div>
                    <div className="buttons ">
                        <button onClick={() => openVideoModal('HEEibYnZw_s')} className="btn">Watch Demo</button>
                        <button onClick={() => window.open("https://github.com/yourusername/miles-of-support", "_blank")} className="btn">GitHub</button>
                    </div>
                </div>

                <div className="card">
                    <h2 >Miles of support</h2>
                    <div className="image ">
                    <Image src={milesofsupport} height={200} width={200} alt="Newsgram" className='projectImages' />
                    </div>
                    <div className="description">
                        <h3>Tech Stack: Next, Tailwind, Mongodb</h3>
                        <p className={`${lexend.className}`}>Miles of Support is a platform similar to Patreon, where users can register and receive support from their supporters, creating a space for personalized contributions and engagement.</p>

                    </div>
                    <div className="buttons ">
                        <button onClick={() => openVideoModal('IUEQYEcYTi8')} className="btn">Watch Demo</button>
                        <button onClick={() => window.open("https://github.com/yourusername/miles-of-support", "_blank")} className="btn">GitHub</button>
                    </div>
                </div>

                {/* <div className="card">
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
                </div> */}

               

            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoId={currentVideoId}
            />
        </div>
    )
}

export default Projects