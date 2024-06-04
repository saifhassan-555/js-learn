//Modern Way to Write Strings
//learn about more strings methods
const name = "saif"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String ("hitesh-hc-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName. substring(0, 4)
console.log(newString);

const anotherString = gameName. slice(-8, 4) //negative value on;y used in slice
console.log(anotherString);

const newStringOne = "   saif   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim start or trim End

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));