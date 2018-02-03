// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(" ").reduce((newString, word, index, arr) => {
    newString = newString + `${word[0].toUpperCase() + word.substr(1)}`;
    if (index !== arr.length - 1) {
      newString += " ";
    }
    return newString;
  }, "");
}

module.exports = capitalize;
