// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
//   }
// };
const countLetters = function(phrase) {
  const countedLetters = {};
  for (let letter of phrase) {
    
    if (letter !== " ") {
      countedLetters[letter] = 0;

    }
  }
  for (let a in countedLetters) {
    for (let b of phrase) {
      if (a === b) {
        countedLetters[a] ++;
      }
    }
  }
  return countedLetters;
};

console.log(countLetters("lighthouse in the house"));