
// Problem 1\\

// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’

// let fruits = ['Apple', 'Banana', 'Orange'];

// let find = fruits.indexOf('Banana');
// console.log(find);
// fruits[1] = 'Mango';
// console.log(fruits);

// fruits.pop();
// fruits.push('Watermelon');
// console.log(fruits);

// Problem 2\\

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.

// let marks = 3543;

// if (marks >= 80 && marks <= 100) {
//     console.log('You Grade is :  A');
// } else if (marks >= 60 && marks < 80) {
//     console.log('You Grade is :  B')
// } else if (marks >= 50 && marks < 60) {
//     console.log('You Grade is :  C')
// } else if (marks >= 40 && marks < 50) {
//     console.log('You Grade is :  D')
// } else if (marks <= 39) {
//     console.log('You Grade is :  F')
// } else {
//     console.log('Does not match in our Grading System')
// }

// Declare variables for the scores
// const yourScore = 85;
// const tomScore = 66;
// const janeScore = 95;
// const peterScore = 56;
// const johnScore = 40;

// // Function to calculate grades
// function calculateGrade(score) {
//   if (score >= 80) {
//     return 'A';
//   } else if (score >= 60) {
//     return 'B';
//   } else if (score >= 50) {
//     return 'C';
//   } else if (score >= 40) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// using function
// // Calculate and display your grade
// const yourGrade = calculateGrade(yourScore);
// console.log('Your grade:', yourGrade);

// // Calculate and display grades for your friends
// const tomGrade = calculateGrade(tomScore);
// console.log('Tom\'s grade:', tomGrade);

// const janeGrade = calculateGrade(janeScore);
// console.log('Jane\'s grade:', janeGrade);

// const peterGrade = calculateGrade(peterScore);
// console.log('Peter\'s grade:', peterGrade);

// const johnGrade = calculateGrade(johnScore);
// console.log('John\'s grade:', johnGrade);

// Problem 3\\

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else

// let num1 = 243;
// let num2 = 79;
// let num3 = 45;

// if (num1 > num2 && num1 > num3) {
//     console.log('Largest number is :'+num1);
// } else if (num2 > num1 && num2 > num3) {
//     console.log('Largest number is : '+num2);
// }else if (num3 > num1 && num3 > num2) {
//     console.log('Largest number is : '+num3);
// }

// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else
// same as upper 