import React, { useEffect, useState } from "react";
import "./TopBar.css";
import Profile from "../Profile/Profile.js";

const TopBar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={
				scrollPosition > 0 ? "container-visible" : "container-hidden"
			}
		>
			<div className="items">
				<Profile />
			</div>
			<div className="background" />
		</div>
	);
};

export default TopBar;
