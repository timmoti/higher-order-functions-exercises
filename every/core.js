// Check to see if all elements in an array
// are even numbers.
function allEven(array) {
  return array.every(elm => elm % 2 === 0);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function rowOnlyContainsPositiveNumber (row) {
  return row.every(elm => elm > 0);
}
function isEveryElementPositive(matrix) {
  return matrix.every(rowOnlyContainsPositiveNumber);
}

module.exports = {
  allEven,
  isEveryElementPositive
};
