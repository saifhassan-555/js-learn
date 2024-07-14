const user = { // object literal
    username: "saif",
    loginCount: 8,           // these are Properties
    signedIn: true,

    getUserDetails: function(){
    //  console.log("Got user details from Database");
    //  console.log(`Username: ${this.username}`);
    console.log(this);

    }

}
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this); // output will be empty paranthesis

//Contructor Function

// const promiseOne = new Promise() 
const date = new Date() // new keyword is contructor function it allow to create multiple instances by one object literal

function User(username, loginCount, isLoggedIn){
   this.username =   username
   this.loginCount = loginCount
   this.isLoggedIn = isLoggedIn

   this. greetings = function(){
    //  console.log(`Welcome ${this.username}`);   

   }
   return this  //by default it return
   
}

const userOne = new User("saif", 12, true)
const userTwo = new User("javascript", 11, false) // contructor function allow single instance to print values indivisually 

console.log(userOne.constructor); // A constructor propety is reffernce about it self 
//console.log(userTwo);


