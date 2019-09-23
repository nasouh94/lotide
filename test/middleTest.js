const middle = require("../middle")
const assert = require('chai').assert;

describe("middle", function() {

  it("should return the middle of an array", () =>{
    assert.deepEqual(middle([1,2,3]), [2]);
  });
})

