import React from "react";
import "./aside.css";
import ProfilePhoto from "../images/pexels-minervastudio-2897883.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Contact from "./Contact";
import Skills from "./Skills";

const initialValues = {
	html: 90,
	css: 90,
	javascript: 100,
	react: 100,
	node: 60,
};
const Aside = () => {
	return (
		<aside className='aside__resume'>
			<div className='img__container'>
				<img src={ProfilePhoto} alt='' />
			</div>
			<div className='about'>
				<h1>ABOUT ME</h1>
				<p>
					I am able to handle multiple tasks on a daily basis., I am a
					dependable person who is great at time management. I have experience
					working as part of a team and individually.
				</p>
			</div>
			<div className='contact__container'>
				<h1>CONTACT</h1>
				<Contact
					Icon={LocationOnIcon}
					title='House 13 Mayode College First Gate'
				></Contact>
				<Contact Icon={PhoneIcon} title='09159403602'></Contact>
				<Contact Icon={EmailIcon} title='davinci@email.com'></Contact>
			</div>
			<div className='skills__container'>
				<h1>SKILLS</h1>
				<Skills title='HTML' value={initialValues.html}></Skills>
				<Skills title='CSS' value={initialValues.css}></Skills>
				<Skills title='NODE' value={initialValues.node}></Skills>
				<Skills title='JavaScript' value={initialValues.javascript}></Skills>
				<Skills title='React' value={initialValues.react}></Skills>
			</div>
		</aside>
	);
};

export default Aside;
