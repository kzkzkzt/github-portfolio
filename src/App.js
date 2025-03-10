import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="app">
			<Header />
			<About />
			<Skills />

			{/* Wrapped Projects and Contact Me sections in a container div */}
			<div className="projects-contact-container">
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
