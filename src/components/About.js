import React from "react";
import { aboutStyles } from "../styles/appStyles"; // Import the styles

const About = () => {
	return (
		<div style={aboutStyles.aboutContainer}>
			<h2 style={aboutStyles.aboutHeading}>About Me</h2>
			<p style={aboutStyles.aboutText}>
				I'm a dedicated and goal-oriented individual with a strong passion for
				cybersecurity. Currently pursuing a bachelor’s degree in cybersecurity
				at Kristiania College University, I enjoy exploring system maintenance
				and SOC analysis. My goal is to combine my customer-oriented experience
				with technical expertise to contribute to a secure and efficient IT
				infrastructure.
			</p>
		</div>
	);
};

export default About;
