// singleton when we declare it like literals then sigleton will not created
//object.create way to define constructor 

// object literals

const mySym = Symbol("key1") // symbol declare
const JsUser = {
    name: "Saif",
    "full name": "saif hassan", // this can define as string [] in braces not define with dot . 
    [mySym]: "mykey1", //proper way to define symbol in objects use square brackets
    age: 18,
    location: "Islamabad",
    email: "saif@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saifchatgpt.com" // values can overwrite by using = in objects
// Object.freeze(JsUser)
JsUser. email = "saif@yahoo.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js User");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //use backticks to use this method for access the objects keys 
}
console.log(JsUser.greetings());// () is important to return the value of function
console.log(JsUser.greetingsTwo());