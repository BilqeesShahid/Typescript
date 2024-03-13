"use strict";
//Object types
//Infer type:
let student = { name: 'Ahmed', age: 21 };
console.log(student.name);
//Object explicit type:
let car = { name: "corolla",
    year: 2018,
    color: ["silver", "white", "black"],
    mileage: "12km per hour"
};
console.log(car.name, car.year, car.mileage, car.color[0]);
let poet = {
    name: "Ali",
    age: 21
};
console.log(poet.age);
let myBook = {
    author: {
        firstName: "Shahid",
        lastName: "Ilyas"
    },
    name: "My best book"
};
console.log(myBook.author.firstName);
console.log(myBook.author.lastName);
console.log(myBook.name);
