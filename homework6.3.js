/* Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/

function get_day(date) {
    let days = 'Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота';
    let days_arr = days.split(' ');
    let date1 = date.getDay();
    let result = days[date1];
    return result;
}
let date = 
console.log(get_day());