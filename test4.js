function isPrime(num) {
  if (num <= 1) return true;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("Is 12 prime?", isPrime(5));
console.log(Math.sqrt(5));
