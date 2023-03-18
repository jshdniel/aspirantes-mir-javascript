
function maxIndex (array) {
    if (!array.length) return -1;

    let resultmax = 0;
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (result < array[i]) {
            result = array[i];
            resultmax = i;
        }
    }
    return resultmax;
}


console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));