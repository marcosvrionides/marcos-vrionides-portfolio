import React from "react";
import "./Footer.css";
import Links from "../Links/Links";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-name">Marcos Vrionides</div>
				<Links />
			</div>
		</footer>
	);
};

export default Footer;
