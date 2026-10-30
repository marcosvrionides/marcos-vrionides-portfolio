import React from "react";
import "./Introduction.css";
import Lottie from "lottie-react";
import WaveAmination from "./Animation - 1709249779931.json";
import profilePic from "../Profile/Profile Picture.jpg";
import Links from "../Links/Links";

const Introduction = () => {
	return (
		<section className="hero" id="top">
			<div className="hero-inner">
				<div className="hero-text">
					<h1 className="hero-name">Marcos Vrionides</h1>
					<p className="hero-occupation">Software Developer</p>
					<p className="hero-intro">
						<span className="highlight">Hey,</span>
						<span className="wave" aria-hidden="true">
							<Lottie
								animationData={WaveAmination}
								loop={0}
								initialSegment={[0, 35]}
							/>
						</span>{" "}
						I’m a software developer with a passion for learning and
						building a variety of software projects.
					</p>
					<Links />
				</div>
				<img
					className="hero-picture"
					src={profilePic}
					alt="Portrait of Marcos Vrionides"
				/>
			</div>
			<svg
				className="hero-curve"
				viewBox="0 0 1440 140"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<path
					className="hero-curve-ribbon"
					d="M0,104 C360,104 540,54 860,40 C1100,30 1300,18 1440,4 L1440,28 C1300,42 1100,54 860,64 C540,78 360,128 0,128 Z"
				/>
				<path
					className="hero-curve-paper"
					d="M0,128 C360,128 540,78 860,64 C1100,54 1300,42 1440,28 L1440,140 L0,140 Z"
				/>
			</svg>
		</section>
	);
};

export default Introduction;
