const formatString = function (string) {
  const newStr = string.slice(0, 40);
  //   if (string.length === newStr.length || string.length < newStr.length) {
  //     return string;
  //   }
  //     return newStr + "...";
  return string.length === newStr.length || string.length < newStr.length
    ? string
    : newStr + "...";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
