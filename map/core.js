function multiplyBy10(array) {
  array = array.map(function(elm) {
    return elm * 10;
  })
  return array;
}

console.log(multiplyBy10([45, 1, -10, 11, 250]));

function onlyVowels(array) {
  array = array.map(function(string) {
    return string.replace(/[bcdfghjklmnpqrstvwxyz]/g, '');
  })
  return array;
}

function onlyVowelsMatch(array) {
  array = array.map(function(string) {
    return string.match(/[aeiou]/g).join('')
  })
  return array;
}

function keepVowelsOnly (word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelOnly = '';
  for (char of word) {
    if (vowels.includes(char)) {
      vowelOnly += char;
    }
  }
  return vowelOnly;
}

function onlyVowelsIncludes(array) {
  return array.map(keepVowelsOnly);
}

console.log(`Vowels with replace: ${onlyVowels(["average", "exceptional", "amazing"])}`);
console.log(`Vowels with match: ${onlyVowelsMatch(["average", "exceptional", "amazing"])}`)
console.log(`Vowels with includes ${onlyVowelsIncludes(["average", "exceptional", "amazing"])}`)


function multiplyBy2(array) {
  array = array.map(elm => elm * 2);
  return array;
}

console.log(multiplyBy2([1, 2, 3]));
console.log(multiplyBy2([10, 20, 30]));

function doubleMatrix(array) {
  array = array.map(multiplyBy2);
  return array;
}

console.log(doubleMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function onlyNames(array) {
  return array.map(function (elm) {
    return elm['name'];
  })
}

console.log(onlyNames([
  {
    name: "homer",
    role: "dad",
    favorite: "donuts"
  },
  {
    name: "marge",
    role: "mom",
    favorite: "family"
  },
  {
    name: "lisa",
    role: "daughter",
    favorite: "school"
  }
]))

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  multiplyBy2: multiplyBy2,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
