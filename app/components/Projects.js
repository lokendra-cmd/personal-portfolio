import React from 'react'

const Projects = () => {
    return (
        <div className={`projects h-[100%] bg-white pt-[13vh] p-[2vw]`}>
            <h1 className='text-[2.5rem] text-center mb-[3vh]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Projects</h1>
            <div className='flex gap-[2vw] mt-[10vh]'>
                <div className="card">
                    <div className="buttons">
                        <button href="#" className="btn">Visit</button>
                        <button href="#" className="btn">GitHub</button>
                    </div>
                </div>

                <div className="card">
                    <div className="buttons">
                        <button href="#" className="btn">Visit</button>
                        <button href="#" className="btn">GitHub</button>
                    </div>
                </div>

                <div className="card">
                    <div className="buttons">
                        <button href="#" className="btn">Visit</button>
                        <button href="#" className="btn">Github</button>
                    </div>

                </div>

                <div className="card">
                    <div className="buttons">
                        <button href="#" className="btn">Visit</button>
                        <button href="#" className="btn">GitHub</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects