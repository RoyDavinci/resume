import React from "react";
import "./experience.css";

const Experience = ({ year, title, subtitle }) => {
	return (
		<div className='experience'>
			<div className='experience__container'>
				<div className='experience__year'>
					<h3>{year}</h3>
				</div>
				<div className='experience__title'>
					<p className='job'>{title}</p>
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
