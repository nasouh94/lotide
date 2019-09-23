
// const middle = function(array1) {
//   if(array1.length <= 3) {
//     return [];
//   }else if(array1.length % 2 === 0) {
//     var middle = [array1[(array1.length)/2 -1], array1[(array1.length/2)]];

//     return middle;
//   } else {
//     //console.log("odd");
//     var oddMiddle = [Math.floor((array1.length)/2) +1];
//     return oddMiddle;
//   }
// };

// module.exports = middle;

const middle = function(arr) {
  if (arr.length < 3) return [];

  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 ?
    arr.slice(mid, mid + 1) : // Odd
    arr.slice(mid - 1, mid + 1); // Even

};

module.exports = middle;