/* Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/
function get_day(date) {
	const WEEK_DAYS =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	let date1 = date.getDay();
		for (i = 0; i < WEEK_DAYS.length; i++) {
			let day_of_week = WEEK_DAYS[i];
				if(i === date1) {
					date1 = day_of_week;
				}
		}
		return date1;
}
let date = new Date('1988-11-29');
console.log(get_day(date));