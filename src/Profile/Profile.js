import React from "react";
import "./Profile.css";
import profilePic from "./Profile Picture.jpg";

const Profile = () => {
	return (
		<div className="container" id="profile">
			<div className="profile-container">
				<img
					className="profile-picture"
					src={profilePic}
					alt="marcos's profile"
				/>
				<div className="profile-text">
					<div className="name">Marcos Vrionides</div>
					<div className="occupation">Software Developer</div>
				</div>
			</div>
			<div className="links">
				<a href="#">Home</a>
				<a href="#projects">Projects</a>
				<a href="#history">Timeline</a>
			</div>
		</div>
	);
};

export default Profile;
