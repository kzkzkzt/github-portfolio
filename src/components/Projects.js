import React from "react";
import pwdStrengthImage from "../assets/pwd-strength-checker.png";
import Button from "./Button"; // Import the reusable Button component

const Projects = () => {
	return (
		<section
			className="projects-container"
			style={projectsStyles.projectsContainer}
		>
			<h2 style={projectsStyles.projectsHeading}>Projects</h2>
			<p>
				Check out one of my featured projects, the{" "}
				<strong>Password Strength Checker</strong>:
			</p>
			<div className="project-card" style={projectsStyles.projectCard}>
				<img
					src={pwdStrengthImage}
					alt="Password Strength Checker"
					className="project-image"
				/>
				<div className="project-info" style={projectsStyles.projectInfo}>
					<h3>Password Strength Checker</h3>
					<p>
						A simple yet powerful tool to evaluate password strength in
						real-time. It provides instant feedback on password security based
						on length, complexity, and character variety.
					</p>
					<p>
						<strong>How it works:</strong> It uses the{" "}
						<strong>Have I Been Pwned (HIBP)</strong> API to check if your
						password has been part of any known data breaches. The service
						compares hashed portions of your password against a large database
						of compromised passwords, ensuring privacy and security.
					</p>
					<p>
						<strong>Database:</strong> The password check is powered by HIBP’s
						database of breached passwords, using a secure hash comparison
						method.
					</p>
					<p>
						<Button
							text="View App"
							link="kzkzkzt.github.io/Password-Strength-Checker"
						/>
					</p>
				</div>
			</div>
			<p>For more projects, visit my GitHub:</p>
			<Button text="Visit My GitHub" link="https://github.com/kzkzkzt" />
		</section>
	);
};

const projectsStyles = {
	projectsContainer: {
		padding: "40px",
		textAlign: "center",
		color: "#f0f0f0",
	},
	projectsHeading: {
		fontSize: "2.5rem",
		color: "#00ffaa",
		textShadow: "0 0 10px #00ffaa, 0 0 20px #00ffaa, 0 0 30px #00ffaa",
		animation: "glow 1.5s ease-in-out infinite alternate",
		marginBottom: "20px",
	},
	projectCard: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "0px",
		flexDirection: "column",
		padding: "0px",
		borderRadius: "10px",
	},
	projectInfo: {
		maxWidth: "600px",
		marginBottom: "0px",
	},
};

export default Projects;
