import React from 'react'
import './Profile.css'
import profilePic from './Profile Picture.jpg';

const Profile = () => {
    return (
        <div className='profile-container' id='profile'>
            <img className='profile-picture' src={profilePic} alt="marcos's profile" />
            <div className='profile-text'>
                <div className='name'>Marcos Vrionides</div>
                <div className='occupation'>Software Developer</div>
            </div>
        </div>
    )
}

export default Profile