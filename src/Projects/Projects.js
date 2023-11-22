import React, { useState } from "react";
import "./Projects.css";
import { IoMdOpen } from "react-icons/io";
import ConnectFeed from "./Sreenshots/Connect_feed.jpg";
import ConnectMessages from "./Sreenshots/Connect_messages.jpg";
import ConnectProfile from "./Sreenshots/Connect_profile.jpg";

import LeaderboardsDetails from "./Sreenshots/Leaderboards_details.jpg";
import LeaderboardsGames from "./Sreenshots/Leaderboards_games.jpg";
import LeaderboardsHome from "./Sreenshots/Leaderboards_home.jpg";

import MyListsHome from "./Sreenshots/MyLists_home.jpg";
import MyListsList from "./Sreenshots/MyLists_list.jpg";
import MyListsNew from "./Sreenshots/MyLists_new.jpg";

import StudentsThoughtsFeed from "./Sreenshots/StudentsThoughts_feed.png";

import PortfolioHome from "./Sreenshots/Portfolio_home.png";

const Projects = () => {
	const [isBouncing1, setIsBouncing1] = useState(false);
	const [isBouncing2, setIsBouncing2] = useState(false);
	const [isBouncing3, setIsBouncing3] = useState(false);
	const [isBouncing4, setIsBouncing4] = useState(false);
	const [isBouncing5, setIsBouncing5] = useState(false);

	const handleProjectHover = (number) => {
		switch (number) {
			case 1:
				setIsBouncing1(true);
				break;
			case 2:
				setIsBouncing2(true);
				break;
			case 3:
				setIsBouncing3(true);
				break;
			case 4:
				setIsBouncing4(true);
				break;
			case 5:
				setIsBouncing5(true);
				break;
		}
	};

	const handleMouseLeave = (number) => {
		switch (number) {
			case 1:
				setIsBouncing1(false);
				break;
			case 2:
				setIsBouncing2(false);
				break;
			case 3:
				setIsBouncing3(false);
				break;
			case 4:
				setIsBouncing4(false);
				break;
			case 5:
				setIsBouncing5(false);
				break;
		}
	};

	return (
		<div className="projects-container" id="projects">
			<div className="projects-title">Projects</div>
			<div className="projects-cards">
				<div
					className={isBouncing5 ? "bounce" : "project"}
					onMouseEnter={() => handleProjectHover(5)}
					onMouseLeave={() => handleMouseLeave(5)}
				>
					<div className="project-title">Leaderboards</div>
					<div className="project-screenshots">
						<img src={LeaderboardsHome} />
						<img src={LeaderboardsDetails} />
						<img src={LeaderboardsGames} />
					</div>
					<span className="project-description">
						Score tracker application used to keep track of games
						between friends. Aimed to solve the problem of scribbled
						notes and lost score cards.
					</span>
					<div className="tech-stack-container">
						<span>React Native</span>
						<span>Firebase Realtime Database</span>
						<span>Firebase Storage</span>
						<span>Firebase Authentication</span>
						<span>Firebase Cloud Functions</span>
						<span>Firebase Cloud Messages</span>
						<span>Git / Github</span>
					</div>
					<a
						className="goToProjectButton"
						href="https://play.google.com/store/apps/details?id=com.backgammon_leaderboards&pcampaignid=web_share"
						target="_blank"
					>
						<span className="goToProjectButtonIcon">
							<IoMdOpen />
						</span>
					</a>
				</div>
				<div
					className={isBouncing4 ? "bounce" : "project"}
					onMouseEnter={() => handleProjectHover(4)}
					onMouseLeave={() => handleMouseLeave(4)}
				>
					<div className="project-title">
						My Portfolio{" "}
						<span
							style={{
								fontSize: "0.7em",
								fontWeight: 100,
							}}
						>
							(This site)
						</span>
					</div>
					<div className="project-screenshots-landscape">
						<img src={PortfolioHome} />
					</div>
					<span className="project-description">
						A responsive website used to showcase my projects.
					</span>
					<div className="tech-stack-container">
						<span>React.js</span>
						<span>Firebase Hosting</span>
						<span>Git / Github</span>
					</div>
					<a
						className="goToProjectButton"
						href="https://marcos-vrionides-portfolio.web.app/"
						target="_blank"
					>
						<span className="goToProjectButtonIcon">
							<IoMdOpen />
						</span>
					</a>
				</div>
				<div
					className={isBouncing3 ? "bounce" : "project"}
					onMouseEnter={() => handleProjectHover(3)}
					onMouseLeave={() => handleMouseLeave(3)}
				>
					<div className="project-title">Connect</div>
					<div className="project-screenshots">
						<img src={ConnectFeed} />
						<img src={ConnectMessages} />
						<img src={ConnectProfile} />
					</div>
					<span className="project-description">
						A companion app for StudentsThoughts.com. While
						StudentsThoughts.com is no longer operational, Connect,
						the companion app, is currently accessible on the Play
						Store.
					</span>
					<div className="tech-stack-container">
						<span>React Native</span>
						<span>Firebase Realtime Database</span>
						<span>Firebase Storage</span>
						<span>Firebase Authentication</span>
						<span>Git / Github</span>
					</div>
					<a
						className="goToProjectButton"
						href="https://play.google.com/store/apps/details?id=com.studentsthoughtsapp&pcampaignid=web_share"
						target="_blank"
					>
						<span className="goToProjectButtonIcon">
							<IoMdOpen />
						</span>
					</a>
				</div>
				<div
					className={isBouncing2 ? "bounce" : "project"}
					onMouseEnter={() => handleProjectHover(2)}
					onMouseLeave={() => handleMouseLeave(2)}
				>
					<div className="project-title">Students Thoughts</div>
					<div className="project-screenshots-landscape">
						<img src={StudentsThoughtsFeed} />
					</div>
					<span className="project-description">
						Social media website which incorporates unique features,
						including the ability to share posts containing
						unconventional file types such as PDFs. Additionally, it
						allows users to create communities, fostering
						connections among individuals who share similar
						interests, alongside incorporating conventional social
						media features.
					</span>
					<div className="tech-stack-container">
						<span>React.js</span>
						<span>Express.js</span>
						<span>Firebase Realtime Database</span>
						<span>Firebase Storage</span>
						<span>Google Cloud Virtual Machine</span>
						<span>Google Domains</span>
						<span>Git / Github</span>
					</div>
					<a
						className="goToProjectButton"
						href="https://github.com/marcosvrionides/StudentsThoughts"
						target="_blank"
					>
						<span className="goToProjectButtonIcon">
							<IoMdOpen />
						</span>
					</a>
				</div>
				<div
					className={isBouncing1 ? "bounce" : "project"}
					onMouseEnter={() => handleProjectHover(1)}
					onMouseLeave={() => handleMouseLeave(1)}
				>
					<div className="project-title">My Lists</div>
					<div className="project-screenshots">
						<img src={MyListsHome} />
						<img src={MyListsList} />
						<img src={MyListsNew} />
					</div>
					<span className="project-description">
						Android application which lets users create lists and
						check off completed items or add new items to a list.
					</span>
					<div className="tech-stack-container">
						<span>Java</span>
						<span>Android Studio</span>
						<span>Git / Github</span>
					</div>
					<a
						className="goToProjectButton"
						href="https://play.google.com/store/apps/details?id=com.marcosvrionides.todolistapp&pcampaignid=web_share"
						target="_blank"
					>
						<span className="goToProjectButtonIcon">
							<IoMdOpen />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
