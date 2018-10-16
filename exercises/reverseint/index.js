// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     const isNegative = n < 0;
//     if (isNegative) {
//         n = n *(-1);
//     }
//     const str = n.toString();
    
//     const result = str.split('').reduce((currResult, char, i) => currResult + (parseInt(char)*Math.pow(10, i)), 0);
    
//     return (result * (isNegative ? -1 : 1));
// }

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
//   console.log(reverseInt(15));
//   console.log(reverseInt(981));
//   console.log(reverseInt(500));
//   console.log(reverseInt(-15));
//   console.log(reverseInt(-90));
module.exports = reverseInt;
