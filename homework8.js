/*Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.*/


// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.


function create_blue_sqares() {
	for(i = 1; i <= 10; i++) {
		let a1 = document.createElement('div');
		a1.setAttribute('style', 'background: blue; width: 50px; height: 50px; margin-bottom: 10px; margin-left: 50%');
		document.body.prepend(a1);
	}
}
setTimeout(create_blue_sqares, 3000);

// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
function create_green_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		search[i].setAttribute('style', 'background: green; width: 100px; height: 100px; margin-bottom: 10px; margin-left: 50%');
	}
}
setTimeout(create_green_sqares, 6000);

// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.

function create_multicolored_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		if(i === 2 || i === 5 || i === 8) {
			search[i].setAttribute('style', 'background: red; width: 100px; height: 100px; margin-bottom: 10px; margin-left: 50%');

		} else {
			search[i].setAttribute('style', 'background: yellow; width: 100px; height: 100px; margin-bottom: 10px; margin-left: 50%');
		}
	}
}

setTimeout(create_multicolored_sqares, 9000);

// 4. Удалить все квадраты, и сделать фон страницы черным.

function delete_all() {
	let search = document.getElementsByTagName('div');
		for(let i = (search.length - 1); i >= 0; i--) {
				search[i].remove();
		}
	document.body.style.backgroundColor = 'black';
}

setTimeout(delete_all, 12000);
