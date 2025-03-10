import React from 'react'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], weight: '200' })

const Experience = () => {
    return (
        <div className={`experience`}>

            <div className="experienceContainer">
                <div className="experianceCards">
                    <h2 className=''>Innovapptive Inc.</h2>
                    <span>January 2023 – July 2023</span>
                    <p className={`${lexend.className}`}>I worked as a Web Developer at Innovaptive Global Solutions, Hyderabad from January 2023 to July 2023. During this time, I developed responsive web applications, ensuring optimal performance and user experiences. I collaborated with teams, implemented modern UI/UX designs, and resolved technical issues to enhance functionality and user satisfaction.</p>

                </div>
                <div className="experianceCards">
                    <h2 >Freelancing</h2>
                    <span>2024</span>
                    <p className={`${lexend.className}`}>I worked as a freelancer, developing software for a Gram Panchayat to calculate tax for villagers and maintain data of villagers. This software streamlined tax calculations and organized villager information efficiently, enhancing data management and accuracy for the Gram Panchayat.</p>

                </div>
                <div className="experianceCards">
                    <h2 >Volunteering</h2>
                    <span >October 2021 - September 2021</span>
                    <p className={`${lexend.className}`}>I volunteered with the Youth Empowerment Foundation, where I contributed to social initiatives aimed at community betterment. I conducted educational programs for orphans, collected donations for sanitary pads to support underprivileged girls, and raised funds for old age homes.</p>

                </div>
            </div>
        </div>
    )
}

export default Experience