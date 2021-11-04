let begin = prompt('Начало массива');
let end = prompt('Конец массива');
function massive(begin, end) {
	let array = [];
	for (let i = begin; i <= end; i++) {
		if(i % 2 === 0) {
			array.push(i);
		}
	}
	alert(`Полученный массив: ${array}`);
}
let result = massive(begin, end);