//inches to feet
// function inchesToFeet(inches) {

//     const feet = inches / 12;
//     return feet;
// }

// let myInches = inchesToFeet(144);
// console.log(myInches);

// let shoaibInches = inchesToFeet(160);
// console.log(shoaibInches);

//hour to minutes

// function hourToMIn(hour) {
//     const min = hour * 60;
//     return min;
// }

// let givenHour=4
// let convertedMin =hourToMIn(givenHour);
// console.log(convertedMin);


//MIles to KM
// function milesToKm(miles) {
//     const km = miles * 1.60934;
//     return km;
// }

// let givenKm = 2;
// const convertedKm = milesToKm(givenKm);
// console.log(convertedKm);


//Even and Odd

// function evenOdd(number) {
//     if (number % 2 == 0) {
//         console.log('This is an Even Number: True');
//     } else {
//         console.log('This is an Odd number: False');
//     }

// }

// let givenNum = 97;
// const result = evenOdd(givenNum);

// console.log(result);

// function isEven(number) {
//     const reminder = number % 2;

//     if (reminder === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let givenNumber = 117;
// let result = isEven(givenNumber);
// console.log(result);


function sumOfArray(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    let avg = sum / numbers.length;
    return avg;
}

let arrayOfNumber = [10, 12, 43, 23, 65, 86,10];
sumOfArray(arrayOfNumber);
let resultOfAvg = sumOfArray(arrayOfNumber);
console.log(resultOfAvg);
