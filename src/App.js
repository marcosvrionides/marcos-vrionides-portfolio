import './App.css';
import React, { useState, useEffect } from 'react';
import profilePic from './Profile Picture.jpg';
import { IoMdOpen } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaFilePdf, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import CV from './CV.jpg'

function App() {
  useEffect(() => {
    document.title = 'Marcos'
  }, [])

  const [isBouncing1, setIsBouncing1] = useState(false)
  const [isBouncing2, setIsBouncing2] = useState(false)
  const [isBouncing3, setIsBouncing3] = useState(false)

  const handleProjectHover = (number) => {
    switch (number) {
      case 1:
        setIsBouncing1(true)
        break;
      case 2:
        setIsBouncing2(true)
        break;
      case 3:
        setIsBouncing3(true)
        break;
    }
  }

  const handleMouseLeave = (number) => {
    switch (number) {
      case 1:
        setIsBouncing1(false)
        break;
      case 2:
        setIsBouncing2(false)
        break;
      case 3:
        setIsBouncing3(false)
        break;
    }
  }

  const [showCV, setShowCV] = useState(false)

  return (
    <div className='body'>
      <div className='navigator-container'>
        <a href='#profile'>Profile</a>
        <a href='#projects'>Projects</a>
        <a href='#education'>Education</a>
      </div>
      <div className='profile-container' id='profile'>
        <img className='profile-picture' src={profilePic} alt="marcos's profile" />
        <div className='profile-text'>
          <div className='name'>Marcos Vrionides</div>
          <div className='occupation'>Software Developer</div>
        </div>
      </div>
      <div className='introduction-container'>
        <div className='emoji'>👋</div>
        <div className='intro'>
          <span className='highlight'>Hey,</span> I’m Marcos a  junior software developer with a passion for building innovative projects and an eagerness to learn and contribute my skills and knowledge to a dynamic team.
        </div>
      </div>
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
      <div className='projects-container' id='projects'>
        <div className='projects-title'>
          Projects
        </div>
        <div className='projects-cards'>
          <div className={isBouncing1 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(1)} onMouseLeave={() => handleMouseLeave(1)}>
            <div className='project-title'>My Lists</div>
            <span className='project-description'>
              List creation application created using Java and Android Studio. Users can create lists in which they can add or check off items and view their completed items.
            </span>
            <a className='goToProjectButton' href='https://play.google.com/store/apps/details?id=com.marcosvrionides.todolistapp&pcampaignid=web_share' target='_blank'>
              <span className='goToProjectButtonIcon'>
                <IoMdOpen />
              </span>
            </a>
          </div>
          <div className={isBouncing2 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(2)} onMouseLeave={() => handleMouseLeave(2)}>
            <div className='project-title'>Students Thoughts</div>
            <span className='project-description'>
              Full stack social media website created using React.js, Express.js, Firebase and Google Cloud Platform. Users on the website can share and interact with
              other user's posts, browse communities, send direct messages as well as group messages and edit their public profile or view other user's profiles.
            </span>
            <a className='goToProjectButton' href='http://www.studentsthoughts.com/' target='_blank'>
              <span className='goToProjectButtonIcon'>
                <IoMdOpen />
              </span></a>
          </div>
          <div className={isBouncing3 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(3)} onMouseLeave={() => handleMouseLeave(3)}>
            <div className='project-title'>Connect</div>
            <span className='project-description'>
              Social media application created using React Native and Firebase. Users can share posts (text, image, video) and interact with other user's posts
              by liking and commenting. Additionaly, users can send direct messages to other users. Lastly, every user has a profile page which they can edit and
              other users can view.
            </span>
            <a className='goToProjectButton' href='https://play.google.com/store/apps/details?id=com.studentsthoughtsapp&pcampaignid=web_share' target='_blank'>
              <span className='goToProjectButtonIcon'>
                <IoMdOpen />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='education-container' id='education'>
        <div className='education-title'>Education</div>
        <div className='education-items-container'>
          <div className='education-item'>
            <p className='education-year'>2020 - 2023</p>
            <p className='education-degree'>BSc Computer Science</p>
            <p className='education-institution'>Loughborough University</p>
          </div>
          <div className='education-item'>
            <p className='education-year'>2012 - 2019</p>
            <p className='education-degree'>A-Levels</p>
            <p className='education-institution'>Xenion Education</p>
            <div className='education-subjects'>
              <p>Physics (A)</p>
              <p>Mathematics (B)</p>
              <p>Computer Science (B)</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
