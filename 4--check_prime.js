function isPrime(number) {
    // check if the number is less than 2, which is not a prime number
    if (number < 2) {
      return false;
    }
  
    // loop through all numbers from 2 to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // if the number is divisible by any number between 2 and its square root, it is not a prime number
      if (number % i === 0) {
        return false;
      }
    }
  
    // if the number is not divisible by any number between 2 and its square root, it is a prime number
    return true;
}
  
const number = 17;
if (isPrime(number)) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}
