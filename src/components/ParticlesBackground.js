import React from "react";
import Particles from "react-tsparticles"; // Import react-tsparticles

const ParticlesBackground = () => {
	return (
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#121212", // Background color of the canvas
					},
				},
				particles: {
					number: {
						value: 80, // Number of particles
						density: {
							enable: true,
							value_area: 800,
						},
					},
					shape: {
						type: "circle", // Particle shape
					},
					size: {
						value: 3, // Particle size
						random: true,
						anim: {
							enable: true,
							speed: 3,
						},
					},
					opacity: {
						value: 0.5,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0,
						},
					},
					links: {
						enable: false, // No linking between particles
					},
					move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: true,
						out_mode: "out", // Particles go out of the canvas when they reach the edge
					},
				},
				interactivity: {
					detect_on: "canvas", // Interactivity for the canvas
					events: {
						onhover: {
							enable: true,
							mode: "repulse", // Repulsion effect when hovering
						},
					},
				},
			}}
		/>
	);
};

export default ParticlesBackground;
