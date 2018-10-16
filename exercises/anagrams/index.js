// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {    
    let stringALow = stringA.replace(/[^\w]/g, "").toLowerCase();    
    const stringBLow = stringB.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
    if (stringALow.length !== stringBLow.length) {
        return false;
    }
    
    for (let char of stringBLow.split('')) {
        const pos = stringALow.indexOf(char);
        if (pos < 0) {
            return false;
        }

        // remove character from stringALow
        stringALow = stringALow.slice(0, pos) + stringALow.slice(pos + 1, stringALow.length);
    }

    // no characters remained in stringA; it means they are anagrams
    return true;
}

module.exports = anagrams;
