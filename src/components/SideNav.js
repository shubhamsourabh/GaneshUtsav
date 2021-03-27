import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
	return (
		<div className="navcontainer">
			{/* <p> */}
			{/* <ul> */}
			<Link to="/" className="one">
				Home
			</Link>
			<Link to="/contact" className="two">
				Contact
			</Link>
			<Link to="/aboutus" className="three">
				AboutUs
			</Link>
			<Link to="/form" className="four">
				Form
			</Link>
			{/* </ul> */}
			{/* </p> */}
		</div>
	);
};

export default SideNav;
