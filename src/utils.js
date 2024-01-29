export const debounceEffect = (cb, delay) => {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
};
