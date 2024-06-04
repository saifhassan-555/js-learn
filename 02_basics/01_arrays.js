// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "neegraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]); 

// array copy operations create two types of copies
// shallow copies(change in orginal array) and deep copies(does no change in original array) create copy

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()// last value of array
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // convert into string


//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //add index value of 0, 1 ,2 in output required values

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)// deleted the portion or manipulate the original Array

console.log("C ", myArr);
console.log(myn2);

