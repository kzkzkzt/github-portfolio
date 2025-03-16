import React, { useEffect } from "react";
import { homeStyles } from "../styles/appStyles"; // Import the styles
import profile from "../assets/profile.png"; // Profile image
import Button from "./Button"; // Import the reusable Button component

const Home = () => {
	useEffect(() => {
		// This will trigger the fade-in animation when the component mounts
		const elements = document.querySelectorAll(".intro-animation");
		elements.forEach((el, index) => {
			setTimeout(() => {
				el.classList.add("visible");
			}, index * 300); // Stagger the animations for a smooth effect
		});
	}, []);

	return (
		<div style={homeStyles.homeContainer}>
			<img
				src={profile}
				alt="Kent Tupaz"
				style={homeStyles.homeImage}
				className="intro-animation"
			/>
			<h1 style={homeStyles.homeHeading} className="intro-animation">
				Hi, I'm Kent Tupaz
			</h1>
			<p style={homeStyles.homeText} className="intro-animation">
				I'm passionate about cybersecurity and coding.
			</p>

			{/* LinkedIn and GitHub buttons */}
			<Button
				text="Visit My LinkedIn"
				link="https://www.linkedin.com/in/kent-h-431b86298/"
			/>
			<Button text="View My GitHub" link="https://github.com/kzkzkzt" />
		</div>
	);
};

export default Home;
