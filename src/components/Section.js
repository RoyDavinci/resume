import React from "react";
import "./section.css";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";

const Section = () => {
	return (
		<section className='section-center'>
			<div className='section-title'>
				<h1>Mathias Chukwudi</h1>
				<h3>Software Developer</h3>
			</div>
			<div className='section-career'>
				<h3>CAREER OBJECTIVES</h3>
				<ul>
					<li>
						To secure a challenging position in a reputable organization to
						expand my learnings, knowledge, and skills.
					</li>

					<li>
						Secure a responsible career opportunity to fully utilize my training
						and skills, while making a significant contribution to the success
						of the company.
					</li>
					<li>
						Seeking an entry-level position to begin my career in a high-level
						professional environment.
					</li>
					<li>
						To secure employment with a reputable company, where I can utilize
						my skills and business studies background to the maximum.
					</li>
				</ul>
			</div>
			<div className='section-education'>
				<h2>Education</h2>
				<Education
					year='2020'
					title='Bachelor Degree'
					subtitle='BSc Computer Science NOUN'
				></Education>
				<Education
					year='2010'
					title='Diploma'
					subtitle='National Institute for Information technology'
				></Education>
				<Education
					year='2014'
					title='SSCE'
					subtitle='Senior Leaving Certificate'
				></Education>
			</div>
			<div className='section-experience'>
				<h2>Experience</h2>
				<Experience
					year='2018'
					title='freelance'
					subtitle='wordpress freelance developer, software developer, mobile developer'
				></Experience>
				<Experience
					year='2020'
					title='PetPlus Veterinary Services'
					subtitle='Operations Manager, handling business operations and transactions'
				></Experience>
				<Experience
					year='2018'
					title='Clear Code Labs'
					subtitle='Software developing, handling code testing, model/database creation, web-app development'
				></Experience>
			</div>
			<div className='interest__container'>
				<h2>Interests</h2>
				<Interests text='scrabble'></Interests>
				<Interests text='games'></Interests>
				<Interests text='music'></Interests>
				<Interests text='robots'></Interests>
				<Interests text='movies'></Interests>
			</div>
		</section>
	);
};

export default Section;
