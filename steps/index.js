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

function steps(n) {
  for(let poundsQty = 1; poundsQty <= n; poundsQty++) {
    const pounds = '#'.repeat(poundsQty)
    const spaces = ' '.repeat(n - poundsQty)

    console.log(pounds + spaces)
  }
}

module.exports = steps;
