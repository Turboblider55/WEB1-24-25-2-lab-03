import { userList } from "./db.js";

console.log("Hello World!");

const isActivated = true; // boolean
const userName = 'Jeremy'; // String
const userCount = 10; // Number
const Nothing = null // Object
let base; //undefined
       


console.log(typeof isActivated);
console.log(typeof userName);
console.log(typeof userCount);
console.log(typeof Nothing);
console.log(typeof base);
console.log(typeof userList);

//Object prototype

Number.prototype.mod = function(divider) {
    return this % divider;
};

console.log( `${userCount} % 3 = ` + userCount.mod(3) );
console.log("");
console.log( userList[0].age.mod(7) );

//Collections

const numbers = [3 , 5 , 7 , [true,true, 'Maria'] , 99 , 0];
console.log(numbers[3][2]);
console.log( numbers.length );

console.log("");

const key = 'name';

console.log( userList[2][key] );



console.log("");


userList.forEach(element => {
    console.log(element.id, element.age, element.name);
});


