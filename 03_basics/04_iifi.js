// Immediately Invoked Function Expressions (IIFE)

(function chai() { 
    // this is named IIFI
    console.log(`DB CONNECTED`); // this is iifi function for immitiate execution or use in parenthesis() 
    
})();

 // IIFE function is used for avoid the global pollution 

(  function aurcode() {
     console.log(`DB CONNECTED TWO`);
}  )(); // this is semicolon is most important for break iifi function


(  () => {
    console.log(`DB CONNECTED TWO`);
}  )();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // parameters can be written at here 
}  )('saif')

//++++++++++++++ javascript Execution Context ++++++++++++++++++//

//code ___> Global Execution Context is always present ___> this

// 1
// Global Execution Context
// Function Execution Context
// Eval Execution Context

//2
//Memory Creation Phase

//3 
//Execution Context Phase


//+++++++++++++++++ Call Stack +++++++++++++++++++//

// GLobal Execution is always present
//one()
//two()
//three()

// it execute one by one or used lifo order one wecute and remove from the call stack 

