function onlyEven(array) {
  return array.filter(number => number % 2 === 0);
}

function checkSingleWord (word) {
  return !word.includes(' ');
}

function onlySingleWord(array) {
  return array.filter(checkSingleWord);
}

function checkPositiveArray(numArray) {
  for (num of numArray) {
    if (num < 0) {
      return false;
      break;
    } 
  }
  return true;
}

function positiveRowsOnly(array) {
  return array.filter(checkPositiveArray);
}

function truthyValuesOnly(array) {
  return array.filter(elm => elm);
}

module.exports = {
  onlyEven: onlyEven,
  onlySingleWord: onlySingleWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
