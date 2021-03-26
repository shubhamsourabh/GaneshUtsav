import React, { useState } from "react";
import SideNav from "./SideNav";

const Form = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
	});

	const { first_name, last_name } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<div className="container2">
			<SideNav />
			<div className="form">
				<form>
					<div id="Fname">
						<label for="fname">First Name:</label>
						<input
							type="text"
							id="first"
							name="first_name"
							onChange={(e) => onChange(e)}
							required
						></input>
					</div>
					<div id="Lname">
						<label for="lname">Last Name:</label>
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

export default Form;
