import React from "react";
import { Link } from "react-router-dom";
import { navbarStyles } from "../styles/appStyles"; // Import the styles

const Navbar = () => {
	return (
		<nav style={navbarStyles.navbar}>
			<ul style={navbarStyles.ul}>
				<li>
					<Link
						to="/"
						style={navbarStyles.a}
						onMouseEnter={(e) => {
							e.target.style.color = "#ffffff"; // White color on hover
							e.target.style.textShadow = "0 0 10px #00ffaa, 0 0 20px #00ffaa"; // Glowing effect
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#00ffaa"; // Reset to neon green
							e.target.style.textShadow = "0 0 5px #00ffaa, 0 0 10px #00ffaa"; // Reset glowing
						}}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						style={navbarStyles.a}
						onMouseEnter={(e) => {
							e.target.style.color = "#ffffff"; // White color on hover
							e.target.style.textShadow = "0 0 10px #00ffaa, 0 0 20px #00ffaa"; // Glowing effect
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#00ffaa"; // Reset to neon green
							e.target.style.textShadow = "0 0 5px #00ffaa, 0 0 10px #00ffaa"; // Reset glowing
						}}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="/skills"
						style={navbarStyles.a}
						onMouseEnter={(e) => {
							e.target.style.color = "#ffffff"; // White color on hover
							e.target.style.textShadow = "0 0 10px #00ffaa, 0 0 20px #00ffaa"; // Glowing effect
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#00ffaa"; // Reset to neon green
							e.target.style.textShadow = "0 0 5px #00ffaa, 0 0 10px #00ffaa"; // Reset glowing
						}}
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						style={navbarStyles.a}
						onMouseEnter={(e) => {
							e.target.style.color = "#ffffff"; // White color on hover
							e.target.style.textShadow = "0 0 10px #00ffaa, 0 0 20px #00ffaa"; // Glowing effect
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#00ffaa"; // Reset to neon green
							e.target.style.textShadow = "0 0 5px #00ffaa, 0 0 10px #00ffaa"; // Reset glowing
						}}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						style={navbarStyles.a}
						onMouseEnter={(e) => {
							e.target.style.color = "#ffffff"; // White color on hover
							e.target.style.textShadow = "0 0 10px #00ffaa, 0 0 20px #00ffaa"; // Glowing effect
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#00ffaa"; // Reset to neon green
							e.target.style.textShadow = "0 0 5px #00ffaa, 0 0 10px #00ffaa"; // Reset glowing
						}}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
