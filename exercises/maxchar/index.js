// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const listChars = {};
    str.split('').map(char => {
        listChars[char] = (listChars[char] || 0) + 1;
    });

    let result = '';
    let max = 0;
    Object.keys(listChars).map(char => {
        if(listChars[char] > max) {
            result = char;
            max = listChars[char];
        }
    });

    return result;
}
// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));
module.exports = maxChar;
