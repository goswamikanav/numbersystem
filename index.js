const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];

const evenNumbers = [];
const oddNumbers = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
});

console.log('Even Numbers:', evenNumbers);
console.log('Odd Numbers:', oddNumbers);