// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe('fibo', () => {
    it('returns an array that length containing the numbers of the Fibonacci sequence.', () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
//I GOT RED
// FAIL  ./code-challenges.test.js
// fibonacci
//   ✕ returns an array that length containing the numbers of the Fibonacci sequence. (2 ms)
// ReferenceError: fibonacci is not defined


// b) Create the function that makes the test pass.

// Pseudo Code
//input a number 
//output an array containing the fibonacci sequence with the length of the number inputed
    //Fibonacci code is a series of numbers where each number is the sum of the two preceding numbers
//Create a function named fibo that takes in a number as an argument
    //This number will represent how long the returned array will be
//i then need to iterate a sequence for a specific number of times 
//I use a for loop to do this having i start at 2 and have it go for the number of times inputed.
    //i starts at two so then i can add index of 1 and index of 2 together to get the index of three and so on 
//The problem I cannot solve is how to get the outputed array to be the lenght inputed and what exactly i am outputting because it is not a normal loop and i cannot iterate through the input that we normally iterate over. 
//I have spend well over an hour on this and I think it is time to move on. 



const fibo = (arrNum) => {
    for(let i = 2; i < arrNum; i++) {
      arrNum[i] = arrNum[i-2] + arrNum[i-1];
    return arrNum[i];
    }
     
}
//COULD NOT FIGURE OUT ****


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe('oddOrdered', () => {
    it('returns a new array of only odd numbers sorted from least to greatest.', () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
        expect(oddOrdered(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddOrdered(fullArr2)).toEqual([-823, 7, 23])
    })
})

// I GOT RED 
// FAIL  ./code-challenges.test.js
// oddOrdered
//   ✕ returns a new array of only odd numbers sorted from least to greatest. (1 ms)

// ● oddOrdered › returns a new array of only odd numbers sorted from least to greatest.

//   ReferenceError: oddOrdered is not defined


// b) Create the function that makes the test pass.

//Psuedo Code 
//Create a function named oddOrdered that takes in an array with mixed data types
// input an array with mixed data types
//output an array with only numbers that are in order from least to greatest
//I used a higher order function of .filter because i need a filtered array with only numbers
//assigned a variable named num to the new array of only numbers
// I returned num.sort which should give me the numbers in order of least to greatest 
//For some reason it keeps saying num.sort is not a function 
    //I have double checked that it is an array, I have tried different syntax, and different returns but i keep getting the same answer

const oddOrdered = (array) => {
    return array.filter(value => {
       let num = typeof value === 'number'
       return num.sort((a,b) => a-b)
   
       })
}

//COULD NOT FIGURE OUT ***




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('accuSum', () => {
    it('returns an array of the accumulating sum. An empty array should return an empty array.', () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]

        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]

        const numbersToAdd3 = []
        // Expected output: []
        expect(accuSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accuSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accuSum(numbersToAdd3)).toEqual([])
    })
})

// I GOT RED 
// FAIL  ./code-challenges.test.js

// ● accuSum › returns an array of the accumulating sum. An empty array should return an empty array.

//   ReferenceError: accuSum is not defined


// b) Create the function that makes the test pass.

//Psuedo Code
//Create a function named accuSum
    //It takes in an array of numbers
//I need to loop over the array of numbers using a for loop
//I need to keep index of 0 as is but change each index following 
    //I have i start at index of 1 so i can add index of 1 and index of 0 together
    //I then need to reassign each index with the line above 
//I return the new nums array with all values reassigned 

const accuSum = (nums) => {
    for(let i = 1; i < nums.length; i++) {
      nums[i] = nums[i] + nums[i-1];
    }
     return nums;
}

// FAIL  ./code-challenges.test.js
// fibo
//   ✕ returns an array that length containing the numbers of the Fibonacci sequence. (3 ms)
// oddOrdered
//   ✕ returns a new array of only odd numbers sorted from least to greatest.
// accuSum
//   ✓ returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)
//IT SAYS FAIL BECAUSE I COULDNT FIGURE OUT THE FIRST TWO PROBLEMS BUT accuSum IS PASSED

