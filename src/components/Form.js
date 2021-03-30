import React, { useState } from "react";
import SideNav from "./SideNav";

import { connect } from "react-redux";
import { getUser } from "../actions/submit";
import PropTypes from "prop-types";

const Form = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
	});

	const { first_name, last_name } = formData;
	//console.log(first_name);
	const onChange = (e) => {
		//console.log(first_name);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		getUser({ first_name, last_name });
		console.log("Hello From Form");
		alert("Hello" + " " + first_name);
	};

	return (
		<div className="container2">
			<SideNav />
			<div className="Form animate__animated animate__backInLeft">
				<h1>Hello User</h1>
				<form onSubmit={(e) => onSubmit(e)}>
					<div id="Fname">
						<label htmlFor="fname">First Name:</label>
						<input
							type="text"
							id="first"
							name="first_name"
							placeholder="Firstname..."
							onChange={(e) => onChange(e)}
							required
						></input>
					</div>
					<br></br>
					<div id="Lname">
						<label htmlFor="lname">Last Name:</label>
						<input
							type="text"
							id="last"
							name="last_name"
							placeholder="Lastname..."
							onChange={(e) => onChange(e)}
							required
						></input>
					</div>
					<br></br>
					<div id="submit">
						<input type="submit"></input>
					</div>
				</form>
			</div>
		</div>
	);
};

Form.propType = {
	getUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	first_name: state.first_name,
	last_name: state.last_name,
});

export default connect(mapStateToProps, { getUser })(Form);
