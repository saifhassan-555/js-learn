const myArr=[]
%DebugPrint(myArr)

//continues, Holey 

// SMI (small integer)
// Packed Element
// Doubles (float, sting, function)

//JSVU is the Utility we can see our JS Engine by using these utilities

const arrTwo = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS(IF WE DELETE THE VALUES OF DECIMAL IT WILL NOT RUN NOT UPDATED IF ONCE DOWN GRADE) Optimization can not be performed

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);

// bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo, prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very Expensive in Js

const arrThree = [1,2,3,4,5]
console.log(arrThree[8]); // out of bound
console.log(arrThree[2]); //continues and return

// SMI(this is the highest optimization) > DOUBLE > PACKED // continues
// H_SMI > H_DOUBLE > H_PACKED // Holey

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_SMI_ELEMENTS
arrFour[1] = '2'//HOLEY_ELEMENTS
arrFour[2] = '2' //HOLEY_ELEMENTS

const arrFive = [] // this is better step for optimization  
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS


const arrSix = [1,2,3,4,5]

arrSix.push(Infinity) // it becomes DOUBLE

// for, for-of, forEach use these default method becuase its optimization is much better




