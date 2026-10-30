import React from "react";
import "./Projects.css";
import { FiArrowUpRight } from "react-icons/fi";
import ConnectFeed from "./Sreenshots/Connect_feed.jpg";

import MyListsHome from "./Sreenshots/MyLists_home.jpg";

import StudentsThoughtsFeed from "./Sreenshots/StudentsThoughts_feed.png";

import DespotisHome from "./Sreenshots/Despoti_home.png";

import VrionidesHome from "./Sreenshots/Vrionides_home.png";

import LeaderboardsWebHome from "./Sreenshots/LeaderboardsWeb_home.png";

const projects = [
	{
		title: "Leaderboards",
		screenshot: LeaderboardsWebHome,
		description:
			"Score tracker used to keep track of games between friends, solving the problem of scribbled notes and lost score cards. It began as a React Native app and now runs in the browser, with search, favourites and a dark mode.",
		techStack: ["React.js", "PostgreSQL", "Railway", "Git / Github"],
		link: "https://leaderboards.vrionides.com",
	},
	{
		title: "www.vrionides.com",
		screenshot: VrionidesHome,
		description:
			"My personal site and project hub, linking out to the projects I host under the vrionides.com domain.",
		techStack: ["React.js", "Railway"],
		link: "https://www.vrionides.com",
	},
	{
		title: "Stefanos Despoti",
		screenshot: DespotisHome,
		description:
			"A responsive personal website for a musician to use as a business tool.",
		techStack: ["React Native", "Firebase Hosting", "Git / Github"],
		link: "https://despotis-ca7ff.web.app/",
	},
];

const archivedProjects = [
	{
		title: "Students Thoughts",
		year: "2023",
		screenshot: StudentsThoughtsFeed,
		description:
			"Social network with communities, group chats and posts that could include files such as PDFs.",
		techStack: ["React.js", "Express.js", "Firebase"],
		link: "https://github.com/marcosvrionides/StudentsThoughts",
	},
	{
		title: "Connect",
		year: "2023",
		screenshot: ConnectFeed,
		description:
			"Companion mobile app for Students Thoughts, with a feed, messaging and profiles.",
		techStack: ["React Native", "Firebase"],
		link: "https://github.com/marcosvrionides/Connect",
	},
	{
		title: "My Lists",
		year: "2022",
		screenshot: MyListsHome,
		description:
			"Android to-do app for creating lists, checking off completed items and setting reminders.",
		techStack: ["Java", "Android Studio", "SQLite"],
		link: "https://github.com/marcosvrionides/My_lists",
	},
];

const Projects = () => {
	return (
		<section className="section" id="projects">
			<h2 className="section-title projects-title">My Projects</h2>
			<div className="projects-cards">
				{projects.map((project) => (
					<article className="project" key={project.title}>
						<div className="project-media project-media-landscape">
							<img
								src={project.screenshot}
								alt={`${project.title} screenshot`}
								loading="lazy"
							/>
						</div>
						<div className="project-body">
							<h3 className="project-title">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									{project.title}
								</a>
							</h3>
							<p className="project-description">
								{project.description}
							</p>
							<ul className="tech-stack-container">
								{project.techStack.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
							<span className="project-view">
								Visit site <FiArrowUpRight />
							</span>
						</div>
					</article>
				))}
			</div>

			<h3 className="archived-title">Archived</h3>
			<p className="archived-intro">
				No longer running, but the code is still on GitHub.
			</p>
			<div className="archived-cards">
				{archivedProjects.map((project) => (
					<article className="project archived" key={project.title}>
						<img
							className="archived-screenshot"
							src={project.screenshot}
							alt={`${project.title} screenshot`}
							loading="lazy"
						/>
						<div className="archived-body">
							<h4 className="project-title archived-project-title">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									{project.title}
								</a>
								<span className="project-note">
									{project.year}
								</span>
							</h4>
							<p className="project-description">
								{project.description}
							</p>
							<ul className="tech-stack-container">
								{project.techStack.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
							<span className="project-view">
								View code on GitHub <FiArrowUpRight />
							</span>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Projects;
