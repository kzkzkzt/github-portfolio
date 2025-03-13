import React from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../assets/profile.png"; // Keep original profile image source
import "./Header.css"; // Import styles for header animations

const Header = () => {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const isAbout = pathname === "/about"; // Check if on About page

	return (
		<header
			className={`header-container ${isHome ? "full-height" : "compact"} ${
				isAbout ? "fixed-top" : ""
			}`}
		>
			{/* Original profile image (only visible on home page) */}
			{isHome && (
				<img src={profile} alt="Kent Tupaz" className="profile-image" />
			)}

			{/* Navbar profile image (only visible when not on home page) */}
			{!isHome && (
				<img src={profile} alt="Kent Tupaz" className="navbar-profile-image" />
			)}

			{isHome && (
				<p className="header-text">
					Hi, I'm Kent Tupaz. I'm passionate about cybersecurity and coding.
				</p>
			)}

			<div className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
