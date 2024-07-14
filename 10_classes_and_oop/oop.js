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

const promiseOne = new Promise() 
const date = new Date() // new keyword is contructor function it allow to create multiple instances by one object literal

function User(username, loginCount, isLoggedIn){
   this.username = username
}