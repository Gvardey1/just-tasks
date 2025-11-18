function sumTo(n) {
    if (n <= 1) return n;
    return n + sumTo(n - 1);
}

console.log("Sum to 5 is:", sumTo(-2));