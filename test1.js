let arr = [1, 2, 3, 4, 5];

function sumArray(array) {
    return array.reduce((acc, val) => acc + val, 0); 
}
console.log("Sum is:", sumArray(arr));


let arr2 = [5, 4, 77, 21, 62];

function maxInArray(array) {
    return Math.max(...array);
}
console.log("Max number in array is:", maxInArray(arr2));


let arr3 = [10, 20, 30, 40, 50];
function averageArray(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}
console.log("Average is:", averageArray(arr3));


