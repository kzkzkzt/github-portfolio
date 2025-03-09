import React from "react";

const Contact = () => {
	return (
		<section className="contact">
			<h2>Contact Me</h2>
			<p>
				Feel free to reach out to me at{" "}
				<a href="mailto:your-email@example.com">kenthtupaz@gmail.com</a>.
			</p>
			<p>
				<span>Connect with me on LinkedIn: </span>
				<a
					href="https://www.linkedin.com/in/kent-h-431b86298/"
					target="_blank"
					rel="noopener noreferrer"
					className="button"
				>
					Visit My LinkedIn
				</a>
			</p>
		</section>
	);
};

export default Contact;
