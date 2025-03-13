import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="app">
				{/* Render Header once at the start */}
				<Header />

				{/* Routes for other sections */}
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					{/* Home route doesn't show any content, only renders the Header */}
					<Route path="/" element={null} /> {/* Empty route for home */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
