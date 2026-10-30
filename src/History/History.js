import React from "react";
import "./History.css";

const items = [
	{
		year: "January 2026 - Present",
		title: "PEGA Developer",
		institution: "NHS Resolution",
	},
	{
		year: "April 2024 - January 2026",
		title: "Associate Consultant",
		institution: "AI4Process",
	},
	{
		year: "2020 - 2023",
		title: "BSc Computer Science",
		institution: "Loughborough University",
	},
	{
		year: "2019 - 2020",
		title: "Infantry Soldier",
		institution: "Cypriot Army",
	},
	{
		year: "2019",
		title: "A-Levels",
		institution: "Xenion Education",
		subjects: ["Physics (A)", "Mathematics (B)", "Computer Science (B)"],
	},
];

const History = () => {
	return (
		<section className="section section-split" id="history">
			<h2 className="section-title">My Timeline</h2>
			<ol className="timeline">
				{items.map((item) => (
					<li className="timeline-item" key={item.title}>
						<p className="timeline-year">{item.year}</p>
						<h3 className="timeline-title">{item.title}</h3>
						<p className="timeline-institution">
							{item.institution}
						</p>
						{item.subjects && (
							<ul className="timeline-subjects">
								{item.subjects.map((subject) => (
									<li key={subject}>{subject}</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ol>
		</section>
	);
};

export default History;
