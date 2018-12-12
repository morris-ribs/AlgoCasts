let nbInteractions = 0;

// TODO memoize

function count(message) {
    nbInteractions++;
    const length = message.length;
    if (message[0] === '0') {
        return 0;
    }

    if (length <= 1) {
        return 1;
    }

    let total = 0;
    const num = parseInt(message.substring(0, 2));
    if (num <= 26) {
        total += count(message.substring(2));
    }

    total += count(message.substring(1));
    return total;
}

function messagedecoder(message) {
    return count(message);
}

console.log(messagedecoder("63945")); // expected 1
console.log(messagedecoder("639451")); // expected 1
console.log(messagedecoder("16945")); // expected 2
console.log(messagedecoder("61945")); // expected 2
console.log(messagedecoder("162945")); // expected 2
console.log(messagedecoder("111")); // expected 3
console.log(messagedecoder("222")); // expected 3
console.log(messagedecoder("161945")); // expected 4
console.log(messagedecoder("261945")); // expected 4
console.log(messagedecoder("1111")); // expected 5
console.log(messagedecoder("2222")); // expected 5
console.log(messagedecoder("1621945")); // expected 6
console.log(messagedecoder("011"));

// expected console
// 1
// 2
// 2
// 2
// 3
// 4
// 4
// 6

module.exports = messagedecoder;