import React from "react";
import { buttonStyles } from "../styles/appStyles"; // Import the button styles

const Button = ({ text, link, onClick }) => {
	return (
		<a
			href={link || "#"} // Default to "#" if no link is provided
			style={buttonStyles.button}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.target.style.backgroundColor = "#121212"; // Dark background on hover
				e.target.style.color = "#00ffaa"; // Neon green text on hover
				e.target.style.boxShadow =
					"0 0 20px #00ffaa, 0 0 30px #00ffaa, 0 0 40px #00ffaa"; // Glowing effect
			}}
			onMouseLeave={(e) => {
				e.target.style.backgroundColor = "#00ffaa"; // Reset background to neon green
				e.target.style.color = "#121212"; // Reset text color to dark
				e.target.style.boxShadow = "none"; // Remove glow on hover out
			}}
		>
			{text}
		</a>
	);
};

export default Button;
