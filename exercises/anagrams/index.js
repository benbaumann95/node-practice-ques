// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   if (
//     stringA
//       .replace(/\W/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('') ===
//     stringB
//       .replace(/\W/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//   ) {
//     return true;
//   }
// }

function anagrams(stringA, stringB) {
  if (cleanWords(stringA) === cleanWords(stringB)) {
    return true;
  }
  return false;
}

function cleanWords(str) {
  return str
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//   	if (aCharMap[char] !== bCharMap[char]) {
//     	return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
// 	const charMap = {};
//
//   for (let char of str.replace(/\W/g, '').toLowerCase()) {
//   	charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

module.exports = anagrams;
