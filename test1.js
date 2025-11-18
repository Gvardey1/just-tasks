let arr = [1, 2, 3, 4, 5];

function sumArray(array) {
    return array.reduce((acc, val) => acc + val, 0); 
}

console.log("Sum is:", sumArray(arr));