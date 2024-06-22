// var c = 300 global scope var is not recommended
let a = 300
if(true){
    let a = 10
    const b = 20 // this is block scope
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "saif"

    function two(){
        const website = "youtube" // in nested function child function can access the parents variables
        console.log(username);
    }
    // console.log(website);

    two()
     
}
// one()

if (true) {
    const username = "saif"
    if (username === "saif") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++ intresting ++++++++++++++++++++//

console.log(addone(5))
function addone(num){
    return num + 1
}
 
// addTwo(5) // before declaration will not execute when we hold function in varaibales
 const addTwo = function(num){
    return num + 2
 }
 console.log(addTwo(5));

 