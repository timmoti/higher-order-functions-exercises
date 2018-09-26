var core = require("./core");

describe("Reduce", function() {
  describe("#sum()", function() {
    it("sum all the numbers in the array", function() {
      var input = [10, 15, 20, 25, 30, 35];
      var expected = 135;
      var actual = core.sum(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#productAll()", function() {
    it("return the product of all items in the matrix", function() {
      var input = [[1, 2, 3], [4, 5], [6]];
      var expected = 720;
      var actual = core.productAll(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#luckyNumbers()", function() {
    it("return a fortune like sentence with lucky numbers", function() {
      var input = [30, 48, 11, 5, 32];
      var expected = "Your lucky numbers are: 30, 48, 11, 5, 32.";
      var actual = core.luckyNumbers(input);

      expect(actual).toEqual(expected);
    });
  });
});
