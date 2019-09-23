const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual.toString()}  ===  ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual.toString()}  !==  ${expected.toString()}`);
  
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let items in itemsToCount) {
    if (itemsToCount[items])
      results[items] = 0;
  }

  for (let a in results) {
    for (let b in allItems) {
      if (a === allItems[b]) {
        results[a] ++;
      }
    }
  }

  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], 0);
// assertEqual(result1["Fang"], 2);

module.exports = countOnly;
