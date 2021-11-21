/*Напишите функцию get_string_length(str), которая в качестве аргумента 
принимает строку str и возвращает её длину, предварительно удалив из строки все 
пробелы (для решения данной задачи обязательно использовать цикл).*/

function get_string_length(str) {
   let no_space = '';
   for(i = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
         no_space += str[i];
      }
   }
   return no_space.length;
}
let string = 'wassup dude';
console.log(get_string_length(string));