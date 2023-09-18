import React, { useState } from 'react'
import './Links.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaFilePdf, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import CV from './CV.jpg'

const Links = () => {
    const [showCV, setShowCV] = useState(false)

    return (
        <div className="contact-container">
            <a href="https://www.linkedin.com/in/marcos-vrionides/" target='_blank' className="contact-button">
                <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/marcosvrionides" target='_blank' className="contact-button">
                <FaGithub /> GitHub
            </a>
            <a href={'mailto:vrionides2000@gmail.com'} className="contact-button">
                <MdEmail /> Email
            </a>
            <button className="contact-button" onClick={() => setShowCV(true)}>
                <FaFilePdf /> CV
            </button>
            {showCV &&
                <div className={'cv-container'}>
                    <img className='CV' src={CV} />
                    <button className='close-cv-button' onClick={() => setShowCV(false)}>X</button>
                </div>
            }
        </div>
    )
}

export default Links