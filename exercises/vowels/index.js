// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }
  return counter;
}

// function vowels(str) {
//   const m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
// }

// function vowels(str) {
//   let counter = 0;
//   let vowelsList = 'aeiou'
// 	for (let i = 0; i < str.length; i++) {
//   	if (vowelsList.includes(str[i].toLowerCase())) {
//     	counter ++;
//
//     }
//
//   }
//   return counter;
// }

module.exports = vowels;
