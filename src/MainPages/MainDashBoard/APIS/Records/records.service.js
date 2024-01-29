import axios from "axios";
import { recordsApiEndPoints as api } from "./index";

export const getTableRecordsApiCall = async () => {
	const config = {
		method: "get",
		url: api.getTableRecords(),
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await axios(config);

		return response;
	} catch (error) {
		throw error;
	}
};
