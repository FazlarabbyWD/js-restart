

// let student={
//     name: 'Fazla Rabby',
//     id: '17-33903-1',
//     dept: 'cse',
//     cgpa:'3.08'
// }

// let mobile = {
//     name: 'Samsung',
//     price: 24000,
//     ram: '8GB',
//     storage:'128 GB'
// }

// console.log(student.cgpa);
// console.log(mobile.price);

// //set using DOt

// student.cgpa = '3.56';
// console.log(student);
// console.log(student.cgpa);


let shoppingCart = {
    mobile: 2,
    pen: 4,
    mouse: 5,
    laptop: 3,
    books: 8
}
// let propertyValue = shoppingCart.mobile;
// console.log(propertyValue);
// console.log(shoppingCart['pen']);

// console.log(shoppingCart.mouse);

// let propertyName = 'laptop';

// let propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);


// console.log(shoppingCart);

// var properties = Object.keys(shoppingCart);
// var propertyValue = Object.values(shoppingCart);

// console.log(properties, propertyValue);

// set value

// shoppingCart.mouse = 15;
// console.log(shoppingCart);

// shoppingCart['mouse'] = 29;
// console.log(shoppingCart);

let propertyName = 'laptop';
shoppingCart[propertyName] = 45;

console.log(shoppingCart);