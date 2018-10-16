// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0) {
    if (n === row) {
        return;
    } 
    const nbCol = (n*2) - 1;
    const centralCol = Math.floor(nbCol/2);
    let strToLog = "";
    for (let i = 0; i < nbCol; i++) {
        if (i >= (centralCol - row) && i <= (centralCol + row)) {
            strToLog += "#";
        } else {
            strToLog += " ";
        }
    }
    console.log(strToLog);
    pyramid(n, row + 1);
}

module.exports = pyramid;
