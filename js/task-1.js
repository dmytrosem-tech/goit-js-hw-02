function logItems(array) {
  for (let item of array) {
    let num = array.indexOf(item) + 1;
    console.log(`${num} - ${item}`);
  }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
