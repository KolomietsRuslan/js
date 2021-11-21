/*Напишите функцию get_type_file( file_name ), которая получает расширение файла 
в заданном имени файла file_name (пример: get_type_file("readme.txt"), 
функция должна вернуть ".txt")*/

let file_name = prompt("Введите название файла");
function get_type_file(file_name) {
   let index = 0;
   for (i = 0; i < file_name.length; i++) {
      if (file_name[i] === '.') {
         index = i;
      }
   }
   return file_name.slice(index, file_name.length);
}
console.log(get_type_file(file_name));