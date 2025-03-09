import React from "react";
import { FaShieldAlt, FaCode, FaCloud, FaDatabase } from "react-icons/fa";

const Skills = () => {
	return (
		<section className="skills">
			<h2>Skills</h2>
			<ul>
				<li>
					<strong>
						<FaShieldAlt /> Cybersecurity & Ethical Hacking
					</strong>
				</li>
				<ul>
					<li>
						Penetration Testing & Red Teaming: Metasploit, Burp Suite, OWASP
						ZAP, Reverse Engineering
					</li>
					<li>Network Security & Analysis: Nmap, Wireshark, Nessus</li>
					<li>
						Password Cracking & Exploitation: Hashcat, John the Ripper, Hydra
					</li>
					<li>SIEM & Threat Detection: Splunk</li>
					<li>Offensive Security OS: Kali Linux</li>
				</ul>

				<li>
					<strong>
						<FaCode /> Software Development
					</strong>
				</li>
				<ul>
					<li>Front-End: HTML5, CSS3, JavaScript, React</li>
					<li>Back-End: Java, NodeJS, Python</li>
					<li>Version Control & Collaboration: Git</li>
					<li>UI/UX & Visualization: Figma, Miro, Tableau, Excel</li>
				</ul>

				<li>
					<strong>
						<FaCloud /> Cloud & DevOps
					</strong>
				</li>
				<ul>
					<li>Cloud Platforms & Infrastructure: AWS, Azure</li>
					<li>Infrastructure as Code: Terraform</li>
				</ul>

				<li>
					<strong>
						<FaDatabase /> Databases
					</strong>
				</li>
				<ul>
					<li>SQL Databases: PostgreSQL, MySQL</li>
				</ul>
			</ul>
		</section>
	);
};

export default Skills;
