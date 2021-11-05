/*Напишите функцию search_string(search, string), которая будет проверять наличие подстроки search в строке string. 
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf*/
let string = 'Это строка для нахождения подстроки';
let search = 'т';
string = string.toUpperCase();
search = search.toUpperCase();
function search_string(search, string) {
	let index = string.indexOf(search);
	if (index >= 0) {
		return true;
	} else {
		return false;
	}
	}
console.log(search_string(search, string));