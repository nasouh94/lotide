const tail = require('../tail');
const assert = require('chai').assert;

describe("tail", function() {
    it("should return the tail of an array", () =>{
      assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

    it("should return the tail of an array", () =>{
      assert.deepEqual(tail([1,2,3]), [2,3]);
    });
})