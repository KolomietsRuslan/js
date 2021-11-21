//Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

let array = [11, 12, 3, 4, 900, 20, 10, 25, 60, 112];
function get_max(arr) {
   arr.sort((b, a) => a - b);
   return arr[0];
}
let res = get_max(array);
console.log('Максимальное значение', res);