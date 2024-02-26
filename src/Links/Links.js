import React, { useState } from "react";
import "./Links.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Links = () => {
	return (
		<div className="contact-container">
			<a
				href="https://www.linkedin.com/in/marcos-vrionides/"
				target="_blank"
				className="contact-button"
			>
				<FaLinkedin /> LinkedIn
			</a>
			<a
				href="https://github.com/marcosvrionides"
				target="_blank"
				className="contact-button"
			>
				<FaGithub /> GitHub
			</a>
			<a
				href={"mailto:vrionides2000@gmail.com"}
				className="contact-button"
			>
				<MdEmail /> Email
			</a>
		</div>
	);
};

export default Links;
