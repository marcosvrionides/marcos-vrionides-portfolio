import React from "react";
import "./Certifications.css";
import { FiArrowUpRight } from "react-icons/fi";
import PegaCSACertification from "./CERTIFICATION_Certified_Pega_System_Architect.pdf";
import PegaCSSACertification from "./CERTIFICATION_Certified_Pega_Senior_System_Architect.pdf";

const certifications = [
	{
		title: "PEGA CSSA Exam",
		fullName: "Certified Pega Senior System Architect",
		date: "February 18, 2025",
		file: PegaCSSACertification,
	},
	{
		title: "PEGA CSA Exam",
		fullName: "Certified Pega System Architect",
		date: "April 10, 2024",
		file: PegaCSACertification,
	},
];

const Certifications = () => {
	return (
		<section className="section section-split" id="certifications">
			<h2 className="section-title">My Certifications</h2>
			<div className="certifications-cards">
				{certifications.map((certification) => (
					<a
						className="certification"
						href={certification.file}
						target="_blank"
						rel="noreferrer"
						key={certification.title}
					>
						<h3 className="certification-title">
							{certification.title}
						</h3>
						<p className="certification-name">
							{certification.fullName}
						</p>
						<p className="certification-date">
							{certification.date}
						</p>
						<span className="certification-view">
							View certificate <FiArrowUpRight />
						</span>
					</a>
				))}
			</div>
		</section>
	);
};

export default Certifications;
