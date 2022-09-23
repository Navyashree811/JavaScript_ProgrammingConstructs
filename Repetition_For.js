const prompt = require("prompt-sync")();
//Power of two
const number = prompt("Enter a range to get power of 2 : ");

for (i = 0; i <= number; i++) {
    console.log(Math.pow(2, i));
}

//Harmonic no.

const number1 = prompt("Enter the value of n : ");
let sum = 0;

for (i = 1; i <= number1; i++) {
    sum += 1 / i;
}
console.log("Harmonic value for the entered value is : " + sum);

//Prime number
const number2 = prompt("Enter a number to check whether it is prime or not: ")
let isPrime = true

if (number2 == 1) {
    console.log("1 is neither prime nor a composite number ")
}

for (i = 2; i <= number2 / 2; i++) {
    if (number2 % i == 0) {
        isPrime = false
    }
}
if (isPrime) {
    console.log("Its' a prime number")
}
else {
    console.log("Its' not a prime number")
}

//Prime no. Range
const lowerNumber = prompt('Enter lower number: ')
const higherNumber = prompt('Enter higher number: ')

console.log("Prime numbers between entered range are: ")

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Factorial 
const number3 = prompt('Enter a number: ');
let fact = 1;

for (i = 2; i <= number3; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number3 + " is " + fact);

//Prime factor
const number4 = prompt('Enter any number to print its prime factors: ')

let isAPrime = 0;

for (i = 2; i <= number4; i++) {
    if (number4 % i == 0) {
        isAPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isAPrime = 0;
            }
        }
        if (isAPrime == 1) {
            console.log(i);
        }
    }
}