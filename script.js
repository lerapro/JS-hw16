const users = [
    { name: "Mango", eyeColor:"blue", gender:"female", isActive: true, email: "mango@gmail.com", age:15 },
    { name: "Polly", eyeColor:"brown", gender:"male", isActive: false, email: "polly@gmail.com", age:20 },
    { name: "Lily", eyeColor:"brown", gender:"female", isActive: false, email: "lily@gmail.com", age:14 },
    { name: "Ajax", eyeColor:"blue", gender:"male", isActive: true, email: "ajax@gmail.com", age:19 }
];

// ------------------task1-----------------------
const names = users.map(user => user.name);
// console.log(names);

// ------------------task2-----------------------
const userWithBlueEyes = users.filter(user => user.eyeColor == "blue");
const userWithBrownEyes = users.filter(user => user.eyeColor == "brown");

// console.log(userWithBlueEyes);
// console.log(userWithBrownEyes);

// ------------------task3-----------------------
const maleUsers = users.filter(user => user.gender == "male");
const femaleUsers = users.filter(user => user.gender == "female");

// console.log(maleUsers);
// console.log(femaleUsers);

// ------------------task4-----------------------
const unactiveUsers = users.filter(user => !user.isActive);
// console.log(unactiveUsers);

// ------------------task5-----------------------
const findUser = users.find(user => user.email == "lily@gmail.com");
// console.log(findUser);

// ------------------task6-----------------------
const usersByAge = users.filter(user => user.age > 10 && user.age < 18);
// console.log(usersByAge);