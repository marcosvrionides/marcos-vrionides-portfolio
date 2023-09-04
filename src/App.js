import './App.css';
import React, { useState } from 'react';
import profilePic from './Profile Picture.jpg'

function App() {
  const [isBouncing1, setIsBouncing1] = useState(false)
  const [isBouncing2, setIsBouncing2] = useState(false)
  const [isBouncing3, setIsBouncing3] = useState(false)

  const handleProjectHover = (number) => {
    switch (number) {
      case 1:
        setIsBouncing1(true)
        setTimeout(() => {
          setIsBouncing1(false)
        }, 750)
        break;
      case 2:
        setIsBouncing2(true)
        setTimeout(() => {
          setIsBouncing2(false)
        }, 750)
        break;
      case 3:
        setIsBouncing3(true)
        setTimeout(() => {
          setIsBouncing3(false)
        }, 750)
        break;
    }
  }

  return (
    <div className='body'>
      <div className='profile-container'>
        <img className='profile-picture' src={profilePic} alt="marcos's profile" />
        <div className='profile-div'>
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
      <div className='projects-container'>
        <div className='projects-title'>
          Projects
        </div>
        <div className='projects-cards'>
          <div className={isBouncing1 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(1)}>
            <div className='project-title'>My Lists</div>
          </div>
          <div className={isBouncing2 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(2)}>
            <div className='project-title'>StudentsThoughts.com</div>
          </div>
          <div className={isBouncing3 ? 'bounce' : 'project'} onMouseEnter={() => handleProjectHover(3)}>
            <div className='project-title'>Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
