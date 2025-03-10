import React from "react";
import pwdStrengthImage from "../assets/pwd-strength-checker.png";

const Projects = () => {
	return (
		<section className="projects">
			<h2>Projects</h2>
			<p>
				Check out one of my featured projects, the{" "}
				<strong>Password Strength Checker</strong>:
			</p>
			<div className="project-card">
				<img
					src={pwdStrengthImage}
					alt="Password Strength Checker"
					className="project-image"
				/>

				<div className="project-info">
					<h3>Password Strength Checker</h3>
					<p>
						A simple yet powerful tool to evaluate password strength in
						real-time. It provides instant feedback on password security based
						on length, complexity, and character variety.
					</p>
					<p>
						<a
							href="https://github.com/kzkzkzt/password-strength-checker"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#00bfff",
								textDecoration: "none",
								fontWeight: "bold",
							}}
						>
							View on GitHub
						</a>
					</p>
				</div>
			</div>
			<p>For more projects, visit my GitHub:</p>
			<a
				href="https://github.com/kzkzkzt"
				target="_blank"
				rel="noopener noreferrer"
				className="button"
			>
				Visit My GitHub
			</a>
		</section>
	);
};

export default Projects;
