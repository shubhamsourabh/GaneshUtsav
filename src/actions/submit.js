import { SUBMIT_FORM, Error } from "./types";
import axios from "axios";

//Get User
export const getUser = ({ f_name, l_name }) => async (dispatch) => {
	try {
		console.log("Hello From Get user");
		const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
		//const res = "Hello Shubham";
		console.log(res);
		dispatch({ type: SUBMIT_FORM, payload: res.data });
	} catch (error) {
		console.err(error);
		dispatch({ type: Error });
	}
};
