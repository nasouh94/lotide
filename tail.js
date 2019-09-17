const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;

};


const words = [];
tail(words);
assertEqual(words.length, 3);

