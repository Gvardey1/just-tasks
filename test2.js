let arr1 = [20, 32, 45, 18, 52];

let arr2 = [];

for (let i = 0; i < arr1.length - 1; i++) {
    arr2[i] = arr1[i+1] - arr1[i] ;
}
console.log("Old array is:", arr1);
console.log("New array is:", arr2);