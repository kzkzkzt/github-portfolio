import React from "react";
import profile from "../assets/profile.png";

const Header = () => {
	return (
		<header>
			<img src={profile} alt="Kent Tupaz" className="profile-image" />
			<h1>Welcome to My Portfolio</h1>
			<p>Hi, I'm Kent Tupaz. I'm passionate about cybersecurity and coding.</p>
		</header>
	);
};

export default Header;
