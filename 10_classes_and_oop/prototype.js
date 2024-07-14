let myName = "saif     "
let mychannel = "chai    "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.saif = function(){                            // this is factory function by default function
console.log(`saif is present in all objects`);
}

Array.prototype.heysaif = function(){
    console.log(`Saif say Hello`);
}
// heroPower.saif()
myHeros.saif()
myHeros.heysaif()
// heroPower.heysaif()


//inheritance

const Teacher = {
    makeVideo: true
}

const Teachingsupport = {

    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true
}