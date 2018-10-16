// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, '');
}

// function reverse(str) {
//     let invStr = "";
//     for (let i = (str.length -1); i >= 0; i--) {
//         invStr += str[i];
//     }
//     return invStr;
// }

module.exports = reverse;
