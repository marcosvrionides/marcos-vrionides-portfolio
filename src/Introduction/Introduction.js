import React from "react";
import "./Introduction.css";
import Lottie from "lottie-react";
import WaveAmination from "./Animation - 1709249779931.json";

const Introduction = () => {
	return (
		<div className="introduction-container">
			<div className="wave">
				<Lottie
					animationData={WaveAmination}
					loop={0}
					initialSegment={[0, 35]}
				/>
			</div>
			<div className="intro">
				<span className="highlight">Hey,</span> I’m a software developer
				with a passion for learning and building a variety of software
				projects.
			</div>
		</div>
	);
};

export default Introduction;
