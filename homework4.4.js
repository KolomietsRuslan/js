let city = prompt('Введите название города');
let point = 0;
let city2;
let letter;
letter = city.slice(-1);
let first_letter;


if (Number(city)) {
	alert('Название города - число? Серьёзно?');
} else {
	for (let i = point; i >= 0; i++) {
		city2 = prompt('Введите название следующего города города');
		first_letter = city2.slice(0, 1);
		if (letter === first_letter) {
			letter = city2.slice(-1);
			i = i + 1;
		} else {
			alert(`Игра окончена. Ваши очки: ${i}`);
			break
} 
}
}
