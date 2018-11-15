import Base58 from 'base-58';

const decode = (text) => {
	let bytes = Base58.decode(text);
	let str = '';
	for (let i = 0; i < bytes.length; i++) {
		str += String.fromCharCode(bytes[i]);
	}
	return decodeURIComponent(escape(str));
}

const findByKey = (array, id) => {
	let element = array.find(element => {
		return element.key == id ? element : false;
	});
	return element;
}

const findMax = (arr) => {
	return arr.reduce(function(prev, curr){ 
		return prev.amount >= curr.amount ? prev : curr;
	});
}

const checkKeeper = () => {
	return typeof window.Waves !== 'undefined';
}

export default {
	decode
}