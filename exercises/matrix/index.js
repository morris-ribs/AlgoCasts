// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    for (i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter++;
        }
        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter++;
        }
        endColumn--;
        // Bottom Row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter++;
        }
        endRow--;

        // Left Column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter++;
        }
        startColumn++;
    }
    return results;
}

function MyMatrix(n) {
    const result = [];
    const limitNumber = Math.pow(n, 2);
    let currentNumber = 1, i = 0, j = 0, direction = 0, currentIndex = 0;
    const initialRow = [0, 1, (n-1), (n-2)];
    const initialCol = [0, (n-1), (n-2), 0];
    const limits = [(n-1), (n-1), 0, 1];
    while (currentNumber <= limitNumber) {
        if (typeof result[i] === "undefined") {
            result[i] = [];
        }
        if (typeof result[i][j] === "undefined") {
            result[i][j] = currentNumber++;
        }
        switch (currentIndex) {
            case 0: { // rightwards
                if (j !== limits[0]) {
                    j++;
                    continue;
                }
                limits[0]--; initialRow[0]++; initialCol[0]++;
            }
            break;
            case 1: { // downwards
                if (i !== limits[1]) {
                    i++;
                    continue;
                }
                limits[1]--; initialRow[1]++; initialCol[1]--;
            } 
            break;
            case 2: { // leftwards
                if (j !== limits[2]) {
                    j--;
                    continue;
                }
                limits[2]++; initialRow[2]--; initialCol[2]++;
            } 
            break;
            default: { // upwards
                if (i !== limits[3]) {
                    i--;
                    continue;
                }
                limits[3]++; initialRow[3]--; initialCol[3]++; 
            } 
            break;
        }
        
        direction++;
        currentIndex = (direction % 4);
        i = initialRow[currentIndex];
        j = initialCol[currentIndex];
    }

    return result;
}

// console.log(MyMatrix(10));


module.exports = matrix;
