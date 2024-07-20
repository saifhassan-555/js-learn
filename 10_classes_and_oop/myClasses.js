//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }


// }

// const add = new User("add","add@123", "123")

// console.log(add.encrptPassword());
// console.log(add.changeUsername());

//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}


User.prototype.encrptPassword = function(){
     return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const sub = new User("sub","sub@123", "123")

console.log(sub.encrptPassword());
console.log(sub.changeUsername());
