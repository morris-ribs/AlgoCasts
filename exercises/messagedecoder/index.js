function count(message, index = 0, counter = 1) {
    const length = message.length;
    if (index === length) {
        return counter;
    }

    const num = parseInt(message[index]);
    if (num === 0) {
        return 0;
    }
        
    if (num === 1) {
        if (index < (length -1)) {
            counter = count(message, index + 2, counter) + 1;
        }
    } else if (num === 2) {
        // num is equal to 2
        const num2 = (index < (length -1)) ? parseInt(message[index+1]) : -1;
        if (num2 > 0 && num2 < 7) {
            counter = count(message, index + 2, counter) + 1;
        }
    }
    
    counter = count(message, ++index, counter);
    return counter;
}

function messagedecoder(message) {
    return count(message);
}

console.log(messagedecoder("011")); // expected 0
console.log(messagedecoder("602")); // expected 0
console.log(messagedecoder("1602")); // expected 0
console.log(messagedecoder("1111111602")); // expected 0
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