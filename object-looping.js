let shoppingCart = {
    mobile: 2,
    pen: 4,
    mouse: 5,
    laptop: 3,
    books: 8
}

// const key = Object.keys(shoppingCart);
// console.log(key);

// const value = Object.values(shoppingCart);
// console.log(value);

let key = Object.keys(shoppingCart);

// for (i = 0; i < key.length; i++) {
//     let propertyName = key[i];
//     let value = shoppingCart[propertyName];


//     console.log(propertyName, value);
// }

for (const key in shoppingCart) {
    const value = shoppingCart[key]
    console.log(key, value);
}