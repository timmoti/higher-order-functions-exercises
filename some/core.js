// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(array) {
  return array.some(num => num > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(array) {
  return array.some(string => string.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.
function containsTrue(matrix) {
  return matrix.some(row => row.some(elm => elm));
}

// Check to see if the word 'Carcosa' is in
// the phrase (using some).
function containsCarcosa(array) {
  return array.some(phrase => phrase.includes('Carcosa'));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  containsTrue,
  containsCarcosa
};
