// for of loop

//["", "", ""]
//[{}, {}, {}]]
const arr =  [1, 2, 3, 4, 5] // forof is good for arrays

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map() // it cotains unique values this is not iteratable 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // not wxecuted
//  console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS', 
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }