//Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.
let array = [11, 12, 3, 4, 900, 20, 10, 25, 60, 112];
function get_random(arr) {
   let max = arr.length - 1;
   return arr[Math.floor(Math.random() * (max))];
}
console.log('Случайное число', get_random(array));