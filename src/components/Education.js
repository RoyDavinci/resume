import React from "react";
import "./education.css";

const Education = ({ year, title, subtitle }) => {
	return (
		<div className='education'>
			<div className='education__container'>
				<div className='education__year'>
					<h4>{year}</h4>
				</div>
				<div className='education__title'>
					<h5>{title}</h5>
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
