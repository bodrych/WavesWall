import axios from 'axios';

const loadPosts = async (node, wall, limit) => {
	let response = await axios.get(`${node}/transactions/address/${wall}/limit/${limit}`);
	return response.data;
}

const getName = async (node, sender) => {
	try {
		let response = await axios.get(`${node}/addresses/data/${sender}/waves-wall-name`);
		return response.data ? response.data : '';
	} catch(err) {
		console.log(err);
		return '';
	}
}

export default {
	loadPosts
}