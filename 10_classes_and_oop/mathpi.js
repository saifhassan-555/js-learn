const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
    // console.log(Math.PI);
    // Math.PI = 5
    // console.log(Math.PI);

    const drink = {
     name: 'cold drink',
     price: 250,
     isAvailable: true,

     orderChai: function(){
        console.log("chai nai bni");
     }
    }

    console.log(Object.getOwnPropertyDescriptor(drink, "name"));

    Object.defineProperty(drink, 'name', {
       // writable: false,
        enumerable: true

    })
    console.log(Object.getOwnPropertyDescriptor(drink, "name"));
    
  for (let [key, value] of Object.entries(drink)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
  }









    //node 10_classes_and_oop/mathpi.js