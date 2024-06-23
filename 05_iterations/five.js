// for Each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(val) { // it carries a function without name pass one name as arguments 
// console.log(val);
// } )

coding.forEach(  (item) => { // for Each loop using arrow function
// console.log(item);
}  )
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log( item, index, arr);
}) 
  
// For each Loop Using objects in Arrays most important

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "Java"
    },
    {
        languageName: "Python",
        languageFile: "Py"
    },
]

myCoding.forEach ( (item) => {
console.log(item.languageName);
} ) 