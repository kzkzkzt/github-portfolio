export const homeStyles = {
	homeContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		textAlign: "center",
		color: "#f0f0f0", // Light text color
		paddingTop: "80px", // Adjust for fixed navbar
		padding: "0 20px", // Padding for smaller screens
	},
	homeHeading: {
		fontSize: "3rem",
		color: "#00ffaa", // Neon green
		textShadow: "0 0 10px #00ffaa, 0 0 20px #00ffaa, 0 0 30px #00ffaa", // Glowing
		animation: "glow 1.5s ease-in-out infinite alternate", // Glowing animation
		marginBottom: "20px",
	},
	homeText: {
		fontSize: "1.5rem",
		color: "#f0f0f0", // Light text
		marginBottom: "20px",
	},
	homeImage: {
		width: "150px",
		height: "150px",
		borderRadius: "50%",
		objectFit: "cover",
		marginBottom: "20px",
	},
};

// CSS animations for intro animation
export const introAnimation = {
	".intro-animation": {
		opacity: 0,
		transform: "translateY(30px)", // Start with the element off-screen
		transition: "opacity 0.8s ease-out, transform 0.8s ease-out", // Smooth transition
	},
	".intro-animation.visible": {
		opacity: 1, // Fade in the element
		transform: "translateY(0)", // Slide into place
	},
};

export const navbarStyles = {
	navbar: {
		position: "fixed" /* Fixed at the top */,
		top: 0,
		left: 0,
		width: "100%" /* Full width */,
		backgroundColor: "#121212" /* Dark background for the navbar */,
		padding: "10px 0" /* Vertical padding */,
		zIndex: 1000 /* Ensure the navbar is above other content */,
		boxShadow:
			"0 4px 6px rgba(0, 0, 0, 0.2)" /* Optional shadow for better separation */,
	},
	ul: {
		listStyleType: "none",
		display: "flex" /* Flexbox for horizontal layout */,
		justifyContent: "center" /* Center the navbar items */,
		margin: 0,
		padding: 0,
	},
	li: {
		margin: "0 20px" /* Horizontal spacing between items */,
	},
	a: {
		color: "#00ffaa" /* Neon green color */,
		textDecoration: "none",
		fontSize: "1.2rem",
		textTransform: "uppercase" /* Uppercase for navbar items */,
		padding: "5px 10px" /* Padding around each link */,
		position: "relative",
		opacity: 1,
		textShadow:
			"0 0 5px #00ffaa, 0 0 10px #00ffaa, 0 0 15px #00ffaa" /* Glowing effect */,
		transition: "all 0.3s ease",
	},
	aHover: {
		color: "#ffffff" /* White color on hover */,
		textShadow:
			"0 0 10px #00ffaa, 0 0 20px #00ffaa" /* Glowing effect on hover */,
	},
};

export const aboutStyles = {
	aboutContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		textAlign: "center",
		color: "#f0f0f0" /* Light text */,
		paddingTop: "80px" /* Adjust for fixed navbar */,
		padding: "0 20px" /* Padding for smaller screens */,
	},
	aboutHeading: {
		fontSize: "3rem",
		color: "#00ffaa" /* Neon green */,
		textShadow:
			"0 0 10px #00ffaa, 0 0 20px #00ffaa, 0 0 30px #00ffaa" /* Glowing */,
		animation:
			"glow 1.5s ease-in-out infinite alternate" /* Glowing animation */,
		marginBottom: "20px",
	},
	aboutText: {
		fontSize: "1.5rem",
		color: "#f0f0f0" /* Light text */,
		maxWidth: "800px" /* Max width for text to prevent too long lines */,
		lineHeight: "1.6" /* Spacing between lines for readability */,
		marginBottom: "20px",
	},
};

export const contactStyles = {
	contactContainer: {
		padding: "40px",
		textAlign: "center",
		color: "#f0f0f0",
	},
	contactHeading: {
		fontSize: "2.5rem",
		color: "#00ffaa",
		textShadow: "0 0 10px #00ffaa, 0 0 20px #00ffaa, 0 0 30px #00ffaa",
		animation: "glow 1.5s ease-in-out infinite alternate",
		marginBottom: "20px",
	},
	contactText: {
		fontSize: "1.5rem",
		color: "#f0f0f0",
		marginBottom: "20px",
	},
	contactLink: {
		color: "#00ffaa", // Default color for the email link
		textDecoration: "none", // Remove the underline by default
		transition: "all 0.3s ease", // Smooth transition for hover effect
	},
	contactLinkHover: {
		color: "#ffffff", // Change to white when hovered
		textDecoration: "underline", // Underline when hovered
		textShadow: "0 0 10px #00ffaa, 0 0 20px #00ffaa", // Glowing effect on hover
	},
};

export const buttonStyles = {
	button: {
		backgroundColor: "#00ffaa", // Neon green background
		color: "#121212", // Dark text for contrast
		border: "2px solid #00ffaa", // Neon green border
		padding: "12px 24px", // Adjusted padding for a bigger button
		fontSize: "1rem",
		borderRadius: "5px", // Rounded corners
		textDecoration: "none", // No underline
		display: "inline-block", // Inline block to support multiple buttons in a row
		transition: "all 0.3s ease", // Smooth transition for hover effects
		textAlign: "center",
		cursor: "pointer", // Pointer cursor to indicate clickable
		margin: "10px 0", // Vertical margin to space buttons
	},
	buttonHover: {
		backgroundColor: "#121212", // Dark background on hover
		color: "#00ffaa", // Neon green text
		boxShadow: "0 0 20px #00ffaa, 0 0 30px #00ffaa, 0 0 40px #00ffaa", // Glowing effect on hover
	},
};
