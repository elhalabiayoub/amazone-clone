import axios from "axios";

const instance = axios.create({
	baseURL: "...", // the cloud function api
});

export default instance;
