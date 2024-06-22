
function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("I");
    console.log("F");
}
// sayMyname()// function reference and execute

// function addTwoNumbers(number1,number2){ // in braces here is called functions parameters
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){ // in braces here is called functions parameters
//    let result = number1 + number2
//    return result 
return number1+number2 // after return nothing will be print
   
}

const result = addTwoNumbers(3,5)   //here in braces this is called arguments 

// console.log("Result:" , result);

function loginUserMessage(username = "sam"){
    if(!username){ // exclamaetry used for false convert in true
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("saif"));
console.log(loginUserMessage("saif")); // output is undefined when parameters are empty 


function calculateCartPrice(...num1){ //... are spraeder
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "saif",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "sam",
    price: 399
})

const myNewArray = [200, 400, 100,  600]
 function returnSecondValue(getArray){
    return getArray[1]
 }
//  console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));