function rotateArray(arr, k) {
    const n = arr.length;
    k %= n; 
    const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotatedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const rotated = rotateArray(originalArray, 2);
console.log("Rotated array:", rotated);
