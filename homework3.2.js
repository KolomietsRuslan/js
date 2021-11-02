const MAX_COUNT_ATTEMPT = 8;
let first = 0;
let second = 100;
let attempts = 0;
let result;
let answer;
for (let n = attempts; n < MAX_COUNT_ATTEMPT; n++) {
   attempts++;
   let i = first + (second - first) / 2;
   let result = confirm(`Ваше число больше ${i}?`);
   if (result) {
      first = i;
 } else {
      second = i;
      }
    answer = second - first < 1;
}

let result2 = Math.round(first + (second - first) / 2);
alert(`Поздравляем, ваше число ${result2} число попыток ${attempts}`);