/*Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/

let text = 'Иванов Сергей Петрович';
function get_short_fio(full_fio) {
	let fio = text.split(' ');
	let short_fio = fio[0] + ' ' + fio[1].slice(0, 1) + '. ' + fio[2].slice(0, 1)+ '. ';
	return short_fio
}
console.log(get_short_fio());
