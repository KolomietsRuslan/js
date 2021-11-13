/*Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.*/


// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
let page = document.body;
page.style.display = 'flex';

function create_blue_sqares() {
	for(i = 1; i <= 1000; i++) {
		let al = document.createElement('div');
		al.setAttribute('style', 'background: lightblue; width: 70px; height: 70px; margin-bottom: 10px; margin-left: 15px');
        console.log(al, i);
        al.innerText = i;
		document.body.prepend(al);
	}
}
setTimeout(create_blue_sqares, 2000);

// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
function create_green_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		search[i].setAttribute('style', 'background: purple; width: 10px; height: 10px; margin-bottom: 10px; margin-left: 50%');
	}
}
setTimeout(create_green_sqares, 4000);

function create_number_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		search[i].setAttribute('style', 'background: purple; width: 10px; height: 10px; margin-bottom: 10px; margin-left: 50%');

	}
}
setTimeout(create_green_sqares, 4000);

/*function create_green_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		search[i].setAttribute('style', 'background: purple; width: 10px; height: 10px; margin-bottom: 10px; margin-left: 50%');
	}
}
setTimeout(create_green_sqares, 4000);
*/

// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.

function create_multicolored_sqares() {
	let search = document.getElementsByTagName('div');
	for(i = 0; i < search.length; i++) {
		if(i % 3 - 2 === 0) {
			search[i].setAttribute('style', 'background: red; width: 10px; height: 10px; margin-bottom: 10px; margin-left: 50%');

		} else if(i % 15 === 0) {
			search[i].setAttribute('style', 'background: olivedrab; width: 10px; height: 10px; margin-bottom: 10px; margin-left: 50%');
		}
	}
}

setTimeout(create_multicolored_sqares, 8000);



// 4. Удалить все квадраты, и сделать фон страницы черным.

function delete_all() {
	let search = document.getElementsByTagName('div');
		for(let i = (search.length - 1); i >= 0; i--) {
            if(i % 3 - 2 === 0)
				search[i].remove();
		}
}

setTimeout(delete_all, 12000);