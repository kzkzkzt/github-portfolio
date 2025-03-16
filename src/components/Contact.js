import React from "react";
import Button from "./Button"; // Import the Button component
import { contactStyles } from "../styles/appStyles"; // Import the styles

const Contact = () => {
	return (
		<section
			className="contact-container"
			style={contactStyles.contactContainer}
		>
			<h2 style={contactStyles.contactHeading}>Contact Me</h2>
			<p style={contactStyles.contactText}>
				Feel free to reach out to me at{" "}
				<a
					href="mailto:kenthtupaz@gmail.com"
					style={contactStyles.contactLink} // Apply contactLink style
					className="contact-link"
				>
					kenthtupaz@gmail.com
				</a>
				.
			</p>
			<p>
				<span>Connect with me on LinkedIn: </span>
				<Button
					text="Visit My LinkedIn"
					link="https://www.linkedin.com/in/kent-h-431b86298/"
				/>
			</p>
		</section>
	);
};

export default Contact;
