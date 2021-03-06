// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkedArray = [];
  while (array.length) {
    chunkedArray.push(array.splice(0, size));
  }
  return chunkedArray;
  console.log(chunkedArray);
}

// function chunk(array, size) {
//   let chunkedArray = [];
//   let index = 0
//
//   while (array.length) {
//     chunkedArray.push(array.slice(index, index + size));
//     index += size
//   }

//   return chunkedArray;
// }

// function chunk(array, size) {
//   let chunked = [];
//
//   for (let element of array) {
//   	const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//     	chunked.push([element])
//     } else {
//     	last.push(element)
//     }
//   }
//   return chunked
// }

module.exports = chunk;
