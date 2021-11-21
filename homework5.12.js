/*Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
•  Создайте пустой объект user.
•  Добавьте свойство name со значением Вася.
•  Добавьте свойство surname со значением Петров.
•  Поменяйте значение name на Сергей.
•  Удалите свойство name из объекта.*/

function ChangeUser() {
   let user = {
      name: "Вася",
      surname: "Петров",
   }
   user.name = "Cергей";
   delete user.name;
   return user;
}
console.log(ChangeUser());