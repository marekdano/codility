// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, level = "") {
  if (n === row) {
    return;
  }

  if (n === level.length) {
    console.log(level);
    return steps(n, row + 1);
  }

  if (level.length <= row) {
    level += "#";
  } else {
    level += " ";
  }

  return steps(n, row, level);
}

module.exports = steps;

// other solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
