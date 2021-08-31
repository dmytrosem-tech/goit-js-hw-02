const findLongestWord = (string) => {
  let longestWord = "";
  const split = string.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > longestWord) {
      longestWord = split[i].length;
      //   console.log(longestWord);
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
