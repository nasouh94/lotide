const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        //console.log("Arrays are not the same");
        return false;
      }
    }

  } else {
    
    return false;
  }

  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

  } else {
    return false;
  }

  return true;
};

const flatten = function(array1) {
  let flattened = [];
  for (let a = 0; a < array1.length; a ++) {
    if (Array.isArray(array1[a])) {
            
      for (let b = 0; b < array1[a].length; b ++) {
        flattened.push(array1[a][b]);
      }
    } else {
      flattened.push(array1[a]);
    }
  }

  return flattened;

};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
