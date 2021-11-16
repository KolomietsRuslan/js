/*Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.*/

$(document).ready(function() {
	let rect1 = $('<div style="width: 200px; height: 100px;background-color: green; margin: 15px;"></div>');
	document.body.append(rect1[0]);
	let rect2 = $('<div style="width: 400px; height: 200px;background-color: yellow; margin: 15px;"></div>');
	document.body.append(rect2[0]);

	$(rect1).on('mouseover', function(event) {
		console.log('Размер этого прямоугольника: 200 на 100 пикселей');
	}
	)
	$(rect2).on('mouseover', function(event) {
		console.log('Размер этого прямоугольника: 400 на 200 пикселей');
	}
	)
	$(rect1).on('click', function(event) {
		alert('Цвет этого прямоугольника: зелёный');
	}
	)
	$(rect2).on('click', function(event) {
		alert('Цвет этого прямоугольника: жёлтый');
	}
	)
});


