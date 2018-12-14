function getsum(arr, ind, length) {
    const result = {};
    let aux1 = ((ind >= (length - 2)) || (arr[ind + 2] < 0)) ? 0 : arr[ind + 2];
    let aux2 = ((ind >= (length - 4)) || (arr[ind + 4] < 0)) ? 0 : arr[ind + 4];
    let sumAux1 = aux1 + aux2;

    let aux3 = ((ind >= (length - 3)) || (arr[ind + 3] < 0)) ? 0 : arr[ind + 3];
    let aux4 = ((ind >= (length - 5)) || (arr[ind + 5] < 0)) ? 0 : arr[ind + 5];
    let sumAux2 = aux3 + aux4;

    if (sumAux1 >= sumAux2) {
        result.sum = sumAux1;
        if (aux2 > 0) {
            result.newInd = ind + 4;
        } else {
            result.newInd = ind + 2;
        }
    } else {
        result.sum = sumAux2;
        if (aux4 > 0) {
            result.newInd = ind + 5;
        } else {
            result.newInd = ind + 3;
        }
    }
    return result;
}

function nonadjacentsum(arr) {
    // retrieve the first positive number in the array
    let ind1 = arr.findIndex(num => num > 0);
    
    // there are no positive numbers, return the max
    if (ind1 < 0) {
        return Math.max(...arr);
    }

    let ind2 = ind1 + 1;
    let sum1 = arr[ind1];
    let sum2 = (arr[ind2] >= 0) ? arr[ind2] : 0;

    const length = arr.length;

    while(ind1 < length && ind2 < length) {
        let sumObj = getsum(arr, ind1, length);
        sum1 += sumObj.sum;
        ind1 = sumObj.newInd;

        sumObj = getsum(arr, ind2, length);
        sum2 += sumObj.sum;
        ind2 = sumObj.newInd;
    }

    return (sum1 >= sum2) ? sum1 : sum2;
}

console.log(nonadjacentsum([2,4,6,2,5]));
console.log(nonadjacentsum([5,1,1,5]));
console.log(nonadjacentsum([12,10,6,25,5]));
console.log(nonadjacentsum([5,1,1,5,1,5]));
console.log(nonadjacentsum([5,1,1,5,1,0]));
console.log(nonadjacentsum([-2,-4,-6,-2,-5]));
console.log(nonadjacentsum([-5,-1,-1,-5]));
console.log(nonadjacentsum([-2,-4,6,-2,-5]));
console.log(nonadjacentsum([-5,-1,1,-5]));
console.log(nonadjacentsum([-2,-4,6,-2,5]));
console.log(nonadjacentsum([-2,-4,6,2,-5]));
console.log(nonadjacentsum([0,0,0,0,0,0,0,55]));

module.exports = nonadjacentsum;