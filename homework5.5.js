// Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

let array = [54, 64, 78, 5, 2, 65, 1, 14, 13, 46];
function get_max(arr) {
   arr.sort((b, a) => a - b);
   return arr[0];
}
let res = get_max(array);
console.log('Максимальное значение', res);