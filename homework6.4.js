/*Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
  если оно задано, иначе посчитать количество дней от текущей даты*/

const MS_SEC = 1000;
const MS_MIN = MS_SEC * 60;
const MS_HOUR = MS_MIN * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_days(date = new Date()) {
    let new_year_date = new Date(new Date().getFullYear(), 11, 31);
    if(date instanceof Date ) {
        let ms_diff_days = new_year_date.getTime() - date.getTime();
        let diff_days = Math.trunc(ms_diff_days / MS_DAY);
        return diff_days;
    }
    return null;
}
let date = new Date(2021, 6, 1);
console.log(get_count_days(date)); 