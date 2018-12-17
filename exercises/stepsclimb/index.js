

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowCount(message) {
    const length = message.length;
    if (length <= 1) {
        return 1;
    }

    let total = 0;
    
    total += count(message.slice(2));
    total += count(message.slice(1));
    return total;
}

const count = memoize(slowCount);

function stepsclimb(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(1);
    }
    return count(arr);
}

console.log(stepsclimb(2)); 
console.log(stepsclimb(3)); 
console.log(stepsclimb(4)); 
console.log(stepsclimb(5)); 