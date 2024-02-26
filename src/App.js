import "./App.css";
import React, { useEffect } from "react";
import Profile from "./Profile/Profile";
import Introduction from "./Introduction/Introduction";
import Links from "./Links/Links";
import Projects from "./Projects/Projects";
import History from "./History/History";
import TopBar from "./TopBar/TopBar";

function App() {
	useEffect(() => {
		document.title = "Marcos";
	}, []);

	return (
		<div className="body">
			<TopBar />
			<Profile />
			<Introduction />
			<Links />
			<Projects />
			<History />
		</div>
	);
}

export default App;
