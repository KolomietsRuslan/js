/*Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если 
она превосходит maxlength – заменяет конец str на "...",
так чтобы ее длина стала равна maxlength.*/

let str = prompt("Введите строку");
function truncate(str, maxlength) {
   if (str.length >= maxlength) {
      let slice = str.slice(0, maxlength - 3);
      str = slice + '...';
   }
   return str;
}
console.log(truncate(str, 10));