import React from "react";
import {
	FaShieldAlt,
	FaCode,
	FaCloud,
	FaDatabase,
	FaCogs,
	FaUserCheck,
	FaTools,
} from "react-icons/fa";

const Skills = () => {
	return (
		<section className="skills-container">
			<h2>Skills</h2>
			<ul>
				<li>
					<strong>
						<FaShieldAlt /> Cybersikkerhet og Etisk Hacking
					</strong>
					<ul>
						<li>
							Penetrasjonstesting og Red Teaming: Metasploit, Burp Suite, OWASP
							ZAP, Reverse Engineering
						</li>
						<li>Nettverkssikkerhet og Analyse: Nmap, Wireshark, Nessus</li>
						<li>
							Passordkracking og Utnyttelse: Hashcat, John the Ripper, Hydra
						</li>
						<li>SIEM og Trusseloppdagelse: Splunk</li>
						<li>Offensive Security OS: Kali Linux</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaCode /> Programmering og Programvareutvikling
					</strong>
					<ul>
						<li>Front-End: HTML5, CSS3, JavaScript, React</li>
						<li>Back-End: Java, Node.js, Python</li>
						<li>Versjonskontroll og Samarbeid: Git</li>
						<li>UI/UX og Visualisering: Figma, Miro, Tableau, Excel</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaCloud /> Sky og DevOps
					</strong>
					<ul>
						<li>Skyløsninger: AWS, Azure</li>
						<li>Infrastruktur som Kode (IaC): Terraform</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaDatabase /> Databaser
					</strong>
					<ul>
						<li>SQL-databaser: PostgreSQL, MySQL</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaCogs /> Sikkerhetsstandarder og Rammer
					</strong>
					<ul>
						<li>
							NIST 27001, NIST CSF, CIA-triaden (Confidentiality, Integrity,
							Availability)
						</li>
						<li>
							GRC (Governance, Risk, Compliance), ISMS
							(Informasjonssikkerhetsledelsessystemer)
						</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaTools /> Systemvedlikehold og Infrastruktur
					</strong>
					<ul>
						<li>Systemvedlikehold, Cyber Defense, Informasjonsteknologi</li>
						<li>Algoritmer og Datastrukturer</li>
					</ul>
				</li>
				<li>
					<strong>
						<FaUserCheck /> Personlige Ferdigheter
					</strong>
					<ul>
						<li>
							Problemløsning, Teamarbeid, Kommunikasjon, Kundebehandling,
							Personlig effektivitet
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};

export default Skills;
