// for in loop
const myObject ={
    js: 'Javascript',
    cpp: 'C++',
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`); // forin good for objects
 }