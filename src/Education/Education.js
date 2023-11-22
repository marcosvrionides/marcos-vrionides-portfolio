import React from "react";
import "./Education.css";

const Education = () => {
	return (
		<div className="education-container" id="education">
			<div className="education-title">Education</div>
			<div className="education-items-container">
				<div className="education-item">
					<p className="education-year">2012 - 2019</p>
					<p className="education-degree">A-Levels</p>
					<p className="education-institution">Xenion Education</p>
					<div className="education-subjects">
						<p>Physics (A)</p>
						<p>Mathematics (B)</p>
						<p>Computer Science (B)</p>
					</div>
				</div>
				<div class="arrow"></div>
				<div className="education-item">
					<p className="education-year">2020 - 2023</p>
					<p className="education-degree">BSc Computer Science</p>
					<p className="education-institution">
						Loughborough University
					</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
