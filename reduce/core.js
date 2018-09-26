function sum(array) {
  return array.reduce((accumulator, element) => accumulator + element);
}

function productArray(array) {
  return array.reduce((accumulator, element) => accumulator * element)
}

function productAll(matrix) {
  let reducedArray = matrix.map(productArray);
  return reducedArray.reduce((accumulator, element) => accumulator * element);
}

function luckyNumbers(array) {
  const numString = array.reduce((accumulator, element) => accumulator + ', ' + element);
  return `Your lucky numbers are: ${numString}.`;
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
