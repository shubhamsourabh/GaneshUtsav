import React from "react";
import SideNav from "./SideNav";

const Contact = () => {
	return (
		<div className="container1">
			<SideNav />
			<div className="contactform">
				<h3>Contact us </h3>
				<p>SHREE VIDYARANYA YUVAKA SANGAHA</p>
				<address>
					#30, 1st Floor, 4th Main,<br></br> N.R. Colony, Basavanagudi,<br></br>{" "}
					Bangalore 560 019 INDIA
				</address>
				<ul>
					<li>+91 9342022070 / 9590443016</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
