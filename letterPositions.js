// const assertArraysEqual = function(array1, array2) {
//   if(array1.length === array2.length) {
//     for (var i = 0; i < array1.length; i ++) {
//       if(array1[i] !== array2[i]) {
//         // console.log("Arrays are not the same");
//         return false;
//       }
//     }

//   } else {
//     // console.log("arrays not same length, therefore not the same");
//     return false;
//   }
//  console.log("arrays are the same!");
// return true;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
//   }
// };


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (letters of sentence) {
    results[letters] = [];

  }
  
  for (let b in results) {
    for (let a = 0; a < sentence.length; a++) {
      if (b === sentence[a]) {
        results[b].push(a);
      }
    }
  }
  return results;
};

// console.log(letterPositions("hello"));

module.exports = letterPositions;