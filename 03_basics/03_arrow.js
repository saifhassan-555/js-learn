const user = {
    username:  "saif",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this keyword is used for access current context inside the scope
        console.log(this);
        }
    
    }
    // user.welcomeMessage()
    // user.username = "sam"
    // user.welcomeMessage()
    console.log(this); // this is empty {} because this is out side the scope 
    // in side browser the global object is window when we checked this in inspect console
    
    // function chai() {
    //     console.log(this.username); 
    // let username = "saif"             // output is undefined because this keyword is not used in functions used in objects
    // }
    // chai()
    
    // const chai = function chai() {
    // let username = "saif"
    //     console.log(this.username);    
    // }
    
    // chai()
    
    const chai = () => { // this is arrow function =>
        let username = "saif"
        console.log(this);    
    }
    
    // chai()
    
    // const addTwo = (num1, num2) => {  this is explicit return when we use curly brakets we use {} then return keyword is required
    //     return num1 + num2
    // }
    
    // const addTwo = (num1, num2) =>  num1 + num2 //   keyword is not required
    // const addTwo = (num1, num2) =>  (num1 + num2) // this is implicit return or when we use () parenthesis then return keyword is not required
    const addTwo = (num1, num2) =>  ({username: "saif"}) // to convert in objects use parenthesis
    console.log(addTwo(3, 4));
    
    // const myArray = [2 ,5, 3, 7, 8]
    
    // myArray.forEach()
    