import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			"Client-ID 6RTdoFFEDvQryjiT6AEzKEj2zmdQtbgw36U6IMRrhOU",
	},
});
