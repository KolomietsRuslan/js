/*Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
*/

function up_first(str) {
	if (str != String(str)) {
		return null;
	} else {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}

}
console.log(up_first('ИВАНОВ'));