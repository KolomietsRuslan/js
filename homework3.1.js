let first_number = prompt('Введите первое число', 0);
let second_number = prompt('Введите второе число', 0);
first_number = Number(first_number);
second_number = Number(second_number);
let count = 0;
let result = 0;

if (isNaN(first_number) || isNaN(first_number)) {
	alert('Введите число');
}	else if (second_number > first_number) {
		for (let i = first_number; i <= second_number; i++) {
			if (i % 6 === 0 && i!== 0) {
				count = count + 1;
				result = result + i;
			}
		}
	} else if (first_number > second_number) {
		for (let i = second_number; i <= first_number; i++) {
			if (i % 6 === 0 && i!== 0) {
				count = count + 1;
				result = result + i;
			}
		}
	}
alert(`Количество чисел, кратных 6 равна ${count}, а сумма чисел, кратных 6 равна ${result}`);