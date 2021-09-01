const checkForSpam = (message) =>
  message.toLowerCase().includes("spam") ||
  message.toLowerCase().includes("sale");

// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   result = message.includes("spam") || message.includes("sale") ? true : false;
//   return result;
// }

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
