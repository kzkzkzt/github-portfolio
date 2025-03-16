import React from "react";
import { homeStyles } from "../styles/appStyles"; // Import the styles
import profile from "../assets/profile.png"; // Profile image
import Button from "./Button"; // Import the reusable Button component

const Home = () => {
	console.log("Home component rendered");

	return (
		<div style={homeStyles.homeContainer}>
			<img src={profile} alt="Kent Tupaz" style={homeStyles.homeImage} />
			<h1 style={homeStyles.homeHeading}>Hi, I'm Kent Tupaz</h1>
			<p style={homeStyles.homeText}>
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
