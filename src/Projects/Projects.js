import React, { useState } from 'react';
import './Projects.css';
import { IoMdOpen } from 'react-icons/io';

const Projects = () => {

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

    return (
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
    )
}

export default Projects