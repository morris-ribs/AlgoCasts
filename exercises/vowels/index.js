// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
function countVowels(str, index = 0, currCount = 0) {
    if (index === str.length) {
        return currCount;
    }

    if (['a', 'e', 'i', 'o', 'u'].includes(str[index])) {
        currCount++;
    }

    return countVowels(str, ++index, currCount);
}


function vowels(str) {
    return countVowels(str.toLowerCase());
}

module.exports = vowels;
