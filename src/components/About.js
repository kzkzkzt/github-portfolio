import React from "react";
import profile from "../assets/profile.png"; // Ensure this path is correct

const About = () => {
	return (
		<>
			{/* Header Section with Profile Image */}
			<header className="about-header">
				<img src={profile} alt="Kent Tupaz" className="profile-image" />
				<h2>About Me</h2>
			</header>

			{/* About Content Section */}
			<section className="about">
				<p>
					I’m a dedicated and goal-oriented individual with a strong passion for
					cybersecurity. Currently pursuing a bachelor’s degree in cybersecurity
					at Kristiania College University, I enjoy exploring system maintenance
					and SOC analysis. My goal is to combine my customer-oriented
					experience with technical expertise to contribute to a secure and
					efficient IT infrastructure.
				</p>
			</section>
		</>
	);
};

export default About;
