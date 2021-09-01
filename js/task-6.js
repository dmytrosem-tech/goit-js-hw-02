let input;
const numbers = [];
let total = 0;

// while (true) {
//   input = prompt("Give as a number");
//   if (input === null) break;
//   if (input === "" || isNaN(input)) alert("lol");
//   numbers.push(Number(input));
//   console.log(numbers);
// }

do {
  input = prompt("Введите число", "");

  if (input === "" || isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  }

  numbers.push(Number(input));
} while (input !== null);

console.log(numbers.reduce((acc, current) => acc + current));

alert(`Общая сумма чисел равна ${total}`);
console.log(numbers);
