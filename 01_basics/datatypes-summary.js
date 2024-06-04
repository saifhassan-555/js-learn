// Primitive Data Types  

//Premitives Data Types are 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint, 


const score = 100
const scoreValue= 100.3

const inLoggedIn = false
const outsideTemp = null // object in output
let userEmail; //undefined in output

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 1234567891234545567n

// Reference Non-Premitive Data Types
// Array, Objects, Functions

const heros = ["shaktiman","negraj","doga"]; //output is object
let myObj = {                                //output is object
    name: "saif",
    age: 24,
}

const myFunction = function(){
    console.log("Helloe World");
}

console.log(typeof myFunction); //funtion object in output

// Memories Types
// Stack(Primitive) variable copy, Heap(Non-premitive) original reference

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = chaiaurcode
// console.log(anothername)

let userOne = {
    email: "hello@gmail.com",
    upi: "user@yb"
}

let userTwo = userOne
userTwo.email = "hitesh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);