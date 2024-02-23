function findMedian(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    return mergedArray.length % 2 === 0
        ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
        : mergedArray[mid];
}

const sortedArray1 = [1, 3, 5];
const sortedArray2 = [2, 4, 6];
console.log("Median:", findMedian(sortedArray1, sortedArray2));
