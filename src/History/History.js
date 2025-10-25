import React from "react";
import "./History.css";

const History = () => {
	return (
		<div className="history-container" id="history">
			<div className="history-title">My Timeline</div>
			<div className="history-items-container">
				<div className="history-item">
					<p className="history-year">April 2024 - Present</p>
					<p className="history-degree">Pega Developer</p>
					<p className="history-institution">AI4Process</p>
				</div>
				<div className="history-item">
					<p className="history-year">2023 - 2024</p>
					<p className="history-degree">Software Developer</p>
					<p className="history-institution">Freelance</p>
				</div>
				<div className="history-item">
					<p className="history-year">2020 - 2023</p>
					<p className="history-degree">BSc Computer Science</p>
					<p className="history-institution">
						Loughborough University
					</p>
				</div>
				<div className="history-item">
					<p className="history-year">2019 - 2020</p>
					<p className="history-degree">Infantry Soldier</p>
					<p className="history-institution">Cypriot Army</p>
				</div>
				<div className="history-item">
					<p className="history-year">2019</p>
					<p className="history-degree">A-Levels</p>
					<p className="history-institution">Xenion Education</p>
					<div className="history-subjects">
						<p>Physics (A)</p>
						<p>Mathematics (B)</p>
						<p>Computer Science (B)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
