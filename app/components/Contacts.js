import React from 'react'
import Image from 'next/image'
import email from '@/app/Images/email.png'
import phone from '@/app/Images/phone.png'
import linkedin from '@/app/Images/linkedin.png'
import github from '@/app/Images/github.png'

const Contacts = () => {
    return (
        <div className={`contacts`}>
            <h1>Contact Me</h1>

            <div className="contactIcons">
                <div className="Logo">
                    <Image src={email} width={40} height={40} alt='email' />
                    <span className='font-semibold'>Email</span>
                    <span>lokendra69.lk@gmail.com</span>
                </div>

                <div className="Logo">
                    <Image src={phone} width={40} height={40} alt='phone' />
                    <span className='font-semibold'>Phone</span>
                    <span>7224966643</span>
                </div>

                <div className="Logo">
                    <Image src={linkedin} width={40} height={40} alt='linkedin' />
                    <span className='font-semibold'>Linkedin</span>
                    <span><a href='https://www.linkedin.com/in/lokendra-kolhe/'> https://www.linkedin.com/in/lokendra-kolhe/</a></span>
                </div>

                <div className="Logo">
                    <Image src={github} width={40} height={40} alt='github' />
                    <span className='font-semibold'>Github</span>
                    <span> <a href='https://github.com/lokendra-cmd'> https://github.com/lokendra-cmd </a></span>
                </div>

            </div>

        </div>
    )
}

export default Contacts