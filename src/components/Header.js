import React from "react";
import profile from "../assets/profile.png";
import "./Header.css"; // Import styles for header animations

const Header = () => {
	return (
		<header className="header-container">
			<img src={profile} alt="Kent Tupaz" className="profile-image" />
			<h1 className="header-text">Welcome to My Portfolio</h1>
			<p className="header-text">
				Hi, I'm Kent Tupaz. I'm passionate about cybersecurity and coding.
			</p>
		</header>
	);
};

export default Header;
