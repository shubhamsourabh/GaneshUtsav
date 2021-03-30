import { SUBMIT_FORM, Error } from "./types";
import axios from "axios";

//Get User
export const getUser = () => async (dispatch) => {
	console.log("Hello From Get user");
	try {
		const res = await axios.get("https://api.mocki.io/v1/b043df5a");
		//const res = "Hello Shubham";
		console.log(res.data);
		dispatch({ type: SUBMIT_FORM, payload: res.data });
	} catch (error) {
		console.err(error);
		dispatch({ type: Error });
	}
};
