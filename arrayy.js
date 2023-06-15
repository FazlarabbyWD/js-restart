// Array Declaration:

// You can declare an array using square brackets [].
// You can initialize an array with elements by enclosing them in the brackets and separating them with commas.

// let emptyArray = [];
// let numberArray = [1, 2, 3, 4, 5];
// let stringArray = ["apple", "banana", "cherry"];
// let mixedArray = [1, "two", true, null];

// Array Length:

// The length property of an array returns the number of elements in the array.
// It is automatically updated as elements are added or removed from the array.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.length); // Output: 3

// Accessing Array Elements:

// You can access individual elements of an array using square brackets [] and the index of the element.
// Array indices start at 0 for the first element.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // Output: "apple"
// console.log(fruits[2]); // Output: "cherry"

// Modifying Array Elements:

// You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "banana", "cherry"];
// fruits[1] = "grape";
// console.log(fruits); // Output: ["apple", "grape", "cherry"]

// Array Methods:

// JavaScript arrays come with built-in methods for performing various operations on arrays.
// Some commonly used methods include:
// push() and pop(): Add or remove elements from the end of the array.
// unshift() and shift(): Add or remove elements from the beginning of the array.
// splice(): Add, remove, or replace elements at specific positions.
// concat(): Merge two or more arrays.
// slice(): Extract a portion of an array into a new array.
// indexOf() and lastIndexOf(): Find the index of an element in the array.
//     forEach(), map(), filter(), reduce(), etc.: Perform iterations and transformations on array elements.

//     let fruits = ["apple", "banana", "cherry"];
// fruits.push("orange");
// console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]

// let removedFruit = fruits.pop();
// console.log(fruits); // Output: ["apple", "banana", "cherry"]
// console.log(removedFruit); // Output: "orange"

// Iterating over Array Elements:

// You can use loops or array iteration methods to iterate over the elements of an array.
// Common loop constructs like for and while can be used.
// Array iteration methods like forEach(), map(), filter(), etc., provide more concise and expressive ways to iterate over arrays.

// let numbers = [1, 2, 3, 4, 5];

// // Using a for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);