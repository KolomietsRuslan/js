/*Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.*/

const MS_SEC = 1000;
const MS_MIN = MS_SEC * 60;
const MS_HOUR = MS_MIN * 60;
const MS_DAY = MS_HOUR * 24;

/*function getBusinessDatesCount(startDate, endDate) {
    startDate = new Date('2021-11-01');
    endDate = new Date('2021-11-08');
    let count = 0;
    let curDate = startDate;
    while (curDate <= endDate) {
        let dayOfWeek = curDate.getDay();
        if (!((dayOfWeek == 0) || (dayOfWeek == 6)))
            count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    alert(`Количество рабочих дней ${count}`);
    return count;
}
console.log(getBusinessDatesCount())*/
function get_count_work_days(date1, date2) {
		let ms_diff_days = date2.getTime() - date1.getTime();
        let diff_days = Math.trunc(ms_diff_days / MS_DAY);
        let count = 0;
        for(let i = 0; i <= diff_days; i++) {
        	let diff = date1.getDay();
        	date1.setDate(date1.getDate() + 1);
        	if (diff >= 1 && diff <= 5) {
        		count++;
        	} else {
        		continue;
        	}
        }
        return count;
	}
let date1 = new Date(2021, 10, 1);
let date2 = new Date(2021, 10, 12);
console.log(get_count_work_days(date1, date2));

/*function get_count_work_days(date1, date2) {
    let day1 = date1.getDay();
    console.log(day1)
    let day2 = date2.getDay();
    console.log(day2)
}
let d1 = new Date(2021, 10, 1);
let d2 = new Date(2021, 10, 8);

get_count_work_days(d1, d2);*/

