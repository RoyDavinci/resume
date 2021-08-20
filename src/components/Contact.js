import React from "react";
import "./contact.css";

const Contact = ({ Icon, title }) => {
	return (
		<div className='contact'>
			<div className='contact-details'>
				{Icon && <Icon className='contact__icon'></Icon>}
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Contact;
