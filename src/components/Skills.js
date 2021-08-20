import React from "react";
import "./skills.css";
import LinearProgress from "@material-ui/core/LinearProgress";

const Skills = ({ title, value }) => {
	return (
		<div className='skills'>
			<div className='skills__container'>
				<p>{title}</p>
				<LinearProgress variant='determinate' value={value}></LinearProgress>
			</div>
		</div>
	);
};

export default Skills;
