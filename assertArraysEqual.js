const assertArraysEqual = function(array1, array2) {
  if(array1.length === array2.length) {
    for (var i = 0; i < array1.length; i ++) {
      if(array1[i] !== array2[i]) {
        console.log("Arrays are not the same");
        return false;
      }
    }

  } else {
    console.log("arrays not same length, therefore not the same");
    return false;
  }
console.log("arrays are the same!");
return true;
};

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) prints falase
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]); // prints true
