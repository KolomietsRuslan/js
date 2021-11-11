// Часть 1

/*function Calculate (name) {
	this.name = name;
}

let calculate = new Calculate('Something');

// Часть 2

function read () {
	this.a = prompt('a', 0);
	this.a = Number(this.a);
  	this.b = prompt('b', 0);
  	this.b = Number(this.b);
}
function sum() {
	return this.a + this.b;
}
function substraction() {
	return this.a - this.b;
}
function multiplication() {
	return this.a * this.b;
}
function division() {
	return this.a / this.b
}

console.log(calculate.name);
console.log(read());
console.log(sum());
console.log(substraction());
console.log(multiplication());
console.log(division());*/

/*Ч1
С помощью функции-конструктора, написать создание объекта Калькулятор. 
Функция конструктор принимает в качестве единственного параметра название калькулятора.
Ч2
Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
Ч3
Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.*/

function Calculate (name) {
	this.name = name;
}

let calculate = new Calculate('Калькулятор');
function element() {
	let num = prompt('Введите число', 0);
	return isNaN(num) ? 1 : Number(num);
}
calculate.element = element;
function division() {
	let first_num = element();
	let second_num = element();
	return first_num / second_num;
}
calculate.division = division;
// console.log(calculate.division());

function substraction() {
	let first_num = element();
	let second_num = element();
	return first_num - second_num;
}
calculate.substraction = substraction;
// console.log(calculate.substraction());

function sum() {
	let how_much = element();
	let result = 0;
	for(i = 1; i <= how_much; i++) {
		result += element();
	}
	return result;
	}
calculate.sum = sum;
// console.log(calculate.sum());

function multiplication() {
	let how_much_multi = element();
	let result = 1;
	for (i = 1; i <= how_much_multi; i++) {
		result = result * element();
	}
	return result;
}
calculate.multiplication = multiplication;
// console.log(calculate.multiplication());

// Ч3

function result_operation() {
	let operation = prompt('Какое действие делаем?');
	let date = new Date();
	let answer = 0;
	switch (operation) {
		case '+': answer = this.sum();
		break;
		case '*': answer = this.multiplication();
		break;
		case '-': answer = this.substraction();
		break;
		case '/': answer = this.division();
		break;
		default: alert('Непонятно');
		break;
	}
	this.result.push(`${this.name} ${date}: ${operation} ${answer}`);
	return answer;
}
function clear() {
	this.result = [];
}
calculate.result = new Array();
calculate.result_operation = result_operation;
calculate.clear = clear;

console.log(calculate.result_operation());
console.log(calculate.result);
console.log(calculate.clear());

