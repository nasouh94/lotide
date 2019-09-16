const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
  }
};

const head = function(array){
  return array[0]
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(4,3);
// assertEqual("Hello", "Hello");


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
