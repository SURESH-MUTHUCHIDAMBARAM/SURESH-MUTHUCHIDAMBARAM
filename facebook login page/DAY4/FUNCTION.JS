// a) Print odd numbers in an array:
// Anonymous function
let printOddNumbers = function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

//   b) Convert all strings to title caps in a string array:
// Anonymous function
let convertToTitleCaps = function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};
console.log(convertToTitleCaps(["hello", "world"]));

// IIFE
let titleCaps = (function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["hello", "world"]);
console.log(titleCaps);

// c) Sum of all numbers in an array:
// Anonymous function
let sumOfNumbers = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// IIFE
let sum = (function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);

//   d) Return all the prime numbers:
// Anonymous function
let getPrimeNumbers = function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// IIFE
let primes = (function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primes);

//   e) Return all the palindromes in an array
// Anonymous function
let getPalindromes = function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};
console.log(getPalindromes(["level", "hello", "noon"]));

// IIFE
let palindromes = (function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
})(["level", "hello", "noon"]);
console.log(palindromes);

// f) Return median of two sorted arrays of the same size
// Anonymous function
let medianOfArrays = function (arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0
    ? merged[mid]
    : (merged[mid - 1] + merged[mid]) / 2;
};
console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));

// IIFE
let median = (function (arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0
    ? merged[mid]
    : (merged[mid - 1] + merged[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);
console.log(median);

//  g) Remove duplicates from an array:
// // Anonymous function
let removeDuplicates = function (arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
let uniqueArray = (function (arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

//   h) Rotate an array by k times
// Anonymous function
let rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
let rotated = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})([1, 2, 3, 4, 5], 2);
console.log(rotated);

// Task 2

//a)Print odd numbers in an array
const printOddNumbers2 = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers2(numbers);

// b)Convert all the strings to title caps in a string array

const convertToTitleCaps2 = (arr) => {
  return arr.map((str) =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
  );
};

// Example usage:
const strings = ["hello", "world", "javascript"];
console.log(convertToTitleCaps2(strings));

//c)Sum of all numbers in an array
const sumOfNumbers2 = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// Example usage:
const numbers2 = [1, 2, 3, 4, 5];
console.log(sumOfNumbers2(numbers2));

//d) Return all the prime numbers in an array
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers2 = (arr) => arr.filter(num => isPrime(num));

// Example usage:
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimeNumbers2(numbers3));

// e) Return all the palindromes in an array
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const getPalindromes2 = (arr) => arr.filter(str => isPalindrome(str));

// Example usage:
const strings2 = ["racecar", "hello", "level", "world", "madam"];
console.log(getPalindromes(strings));




