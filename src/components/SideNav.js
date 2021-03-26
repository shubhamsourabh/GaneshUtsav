import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
	return (
		<div className="navcontainer">
			<p>
				<ul>
					<Link to="">
						<li className="one">Home</li>
					</Link>
					<Link to="/contact">
						<li className="two">Contact</li>
					</Link>
					<Link to="/aboutus">
						<li className="three">AboutUs</li>
					</Link>
					<Link to="/form">
						<li className="four">Form</li>
					</Link>
				</ul>
			</p>
		</div>
	);
};

export default SideNav;
