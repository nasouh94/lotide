const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(4,3);
assertEqual("Hello", "Hello");


