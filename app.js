const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeArray = numbers.filter(isPrime);

const maxPrime = Math.max(...primeArray);
const minPrime = Math.min(...primeArray);
const sumPrimes = primeArray.reduce((acc, val) => acc + val, 0);

console.log('Prime Numbers:', primeArray);
console.log('Max Prime:', maxPrime);
console.log('Min Prime:', minPrime);
console.log('Sum of Primes:', sumPrimes);
