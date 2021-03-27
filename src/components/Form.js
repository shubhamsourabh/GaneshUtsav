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
		// console.log("Hello From Form");
		alert("Hello" + " " + first_name);
	};

	return (
		<div className="container2">
			<SideNav />
			<div className="form">
				<form onSubmit={(e) => onSubmit(e)}>
					<div id="Fname">
						<label htmlFor="fname">First Name:</label>
						<input
							type="text"
							id="first"
							name="first_name"
							onChange={(e) => onChange(e)}
							required
						></input>
					</div>
					<div id="Lname">
						<label htmlFor="lname">Last Name:</label>
						<input
							type="text"
							id="last"
							name="last_name"
							onChange={(e) => onChange(e)}
							required
						></input>
					</div>
					<div id="submit">
						<input type="submit"></input>
					</div>
				</form>
			</div>
		</div>
	);
};

Form.propTypes = {
	getUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUser })(Form);
