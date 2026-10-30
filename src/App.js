import "./App.css";
import React, { useEffect } from "react";
import Introduction from "./Introduction/Introduction";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import History from "./History/History";
import TopBar from "./TopBar/TopBar";
import Certifications from "./Certifications/Certifications";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
	apiKey: "AIzaSyBDx9jeLoegIfMAImx_UtDh8s5X6e8R044",
	authDomain: "marcos-vrionides-portfolio.firebaseapp.com",
	projectId: "marcos-vrionides-portfolio",
	storageBucket: "marcos-vrionides-portfolio.appspot.com",
	messagingSenderId: "959203814468",
	appId: "1:959203814468:web:554aee0e05e0473a85e011",
	measurementId: "G-F3J2FSKFTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	useEffect(() => {
		document.title = "Marcos";
		logEvent(analytics, "site_visit");
	}, []);

	return (
		<>
			<TopBar />
			<main>
				<Introduction />
				<History />
				<Certifications />
				<Projects />
			</main>
			<Footer />
		</>
	);
}

export default App;
