let array = [4, 9, 2, 11, 6];

function get_min (arr) {
	arr.sort((a, b) => a - b);
	return arr[0];
}
let result = get_min(array);
alert('result ' + result);