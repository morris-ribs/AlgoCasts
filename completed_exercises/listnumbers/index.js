function listnumbers(arr, k) {
    const limit = arr.length;
    const seen = [];
    for (let i = 0; i < limit; i++) {
        if (seen.findIndex(num => num === (k - arr[i])) >= 0) {
            return true;
        }
        seen.push(arr[i]);
    }

    return false;
}

module.exports = listnumbers;