import { SUBMIT_FORM, Error } from "../actions/types";

const initialState = {
	loading: true,
	user: null,
};

export default function foo(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SUBMIT_FORM:
			return {
				...state,
				loading: false,
				user: payload,
			};

		case Error:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
}
