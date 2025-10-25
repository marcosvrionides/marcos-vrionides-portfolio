import React from "react";
import "./Certifications.css";
import PegaCSACertification from "./CERTIFICATION_Certified_Pega_System_Architect.pdf";
import PegaCSSACertification from "./CERTIFICATION_Certified_Pega_Senior_System_Architect.pdf";

const Certifications = () => {
	return (
		<div className="certifications-container" id="certifications">
			<div className="certifications-title">My Certifications</div>
			<div className="certifications-cards">
				<div className="certification">
					<text className="certification-title">PEGA CSSA Exam</text>
					<iframe
						className="certification-file"
						src={PegaCSSACertification}
					/>
				</div>
				<div className="certification">
					<text className="certification-title">PEGA CSA Exam</text>
					<iframe
						className="certification-file"
						src={PegaCSACertification}
					/>
				</div>
			</div>
		</div>
	);
};

export default Certifications;
