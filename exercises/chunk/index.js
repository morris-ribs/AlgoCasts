// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {   
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
// function chunk(array, size) {    
//     const result = [];    
//     const numberOfElementsInFinalArray = (array.length / size) + ((array.length%size) > 0 ? 1 : 0);
//     if (numberOfElementsInFinalArray === 0) {
//         return array;
//     }
//     let tempIndex = 0;
//     for (let i = 0; i < numberOfElementsInFinalArray; i++) {
//         if (tempIndex >= array.length) {
//             break;
//         }
//         let temparray = [];
//         for (let j = 0; j < size; j++) {
//             if (tempIndex >= array.length) {
//                 break;
//             }
//             temparray[j] = array[tempIndex++];
//         }
//         result.push(temparray);
//     }
//     return result;
// }
module.exports = chunk;
