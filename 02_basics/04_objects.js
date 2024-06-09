const tinderUser1 = new Object() // this is an sigleton object
const tinderUser = {} // non singleton object

tinderUser.Id = "12345"
tinderUser.name = "saif"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saif",
            lastname: "hassan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // use spread to define these values

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // make array of an object 
console.log(Object.values(tinderUser)); // for access values
console.log(Object.entries(tinderUser)); // convert in array id and values separately
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
