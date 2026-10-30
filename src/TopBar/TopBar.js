import React, { useEffect, useState } from "react";
import "./TopBar.css";

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
		<header className={scrollPosition > 0 ? "topbar scrolled" : "topbar"}>
			<nav className="topbar-inner">
				<a className="topbar-brand" href="#top">
					<span className="brand-full">Marcos Vrionides</span>
					<span className="brand-short" aria-hidden="true">
						MV
					</span>
				</a>
				<div className="topbar-links">
					<a href="#history">Timeline</a>
					<a href="#certifications">Certifications</a>
					<a href="#projects">Projects</a>
				</div>
			</nav>
		</header>
	);
};

export default TopBar;
