/*Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

let string = prompt('Введите фразу');
let symbol = prompt('Введите букву');
let result = 0;
string = string.toUpperCase();
symbol = symbol.toUpperCase();
function count_symbol(symbol, string) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] === symbol) {
			result++;
		}
	}
	return result;
}
count_symbol(symbol, string);
console.log(string);
console.log(symbol);
console.log(result);