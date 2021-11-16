function Calculator(name) {
   this.name = name;
   this.history = [];
   this.save_history = function (param) {
      for (let i = 0; i < param.length; i++) {
         console.log(param[i]);
      }
      return 'done'
   };
   this.clear_history = function (param) {
      param.splice(0);
      return 'clear'
   };
   this.check_param = function (param) {
      let res_arr = [];
      for (let i = 0; i < param.length; i++) {
         if (!isNaN(param[i])) {
               res_arr.push(param[i]);
         }
      }
      return res_arr;
   };
   this.calculate_result = function (param1, param2) {
      let symbol;
      let word_for_history;
      switch (param1) {
         case 'sum':
               symbol = '+';
               word_for_history = 'сумма'
               break;
         case 'sub':
               symbol = '-';
               word_for_history = 'разность'
               break;
         case 'mul':
               symbol = '*';
               word_for_history = 'произведение'
               break;
         case 'seg':
               symbol = '/';
               word_for_history = 'деление'
               break;
      }
      let clean_arg = this.check_param(param2);
      let result = clean_arg[0];
      for (let j = 1; j < clean_arg.length; j++) {
         result = eval(result + symbol + clean_arg[j]);
      }
      let date_for_history = (new Date().toLocaleString()).replace(',', '');
      this.history.push(`${this.name} (${date_for_history}): ${word_for_history} = ${result}, (${clean_arg})`)
      return result;
   };
   this.summation = function (...arg) {
      return this.calculate_result('sum', arg);
   };
   this.subtraction = function (p1, p2) {
      return this.calculate_result('sub', arguments);
   };
   this.multiplication = function (...arg) {
      return this.calculate_result('mul', arg);
   };
   this.segment = function (p1, p2) {
      return this.calculate_result('seg', arguments);
   };
}

let calculator = new Calculator('Мой калькулятор');
console.log(calculator.summation(1, 2, 'раз', 48));
console.log(calculator.subtraction(25, 88));
console.log(calculator.multiplication(18, 28, 'два', 48));
console.log(calculator.save_history(calculator.history));
console.log(calculator.clear_history(calculator.history));
console.log(calculator.segment(98, 19));
console.log(calculator.save_history(calculator.history));