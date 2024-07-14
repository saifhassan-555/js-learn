//fetch('https://something.com').then().catch().finally()
//promise is an object

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
    console.log("Async task is complete");
    resolve()  
    },1000)
})
promiseOne.then(function(){ // resolve is directly connected to then
    console.log("Promises consumed");
})

new Promise(function(resolve, reject)
{
    setTimeout(function(){
       console.log("Async task 2");
       resolve()
    },1000)


}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
   resolve({username: "saif", email: "saif@123.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
   })


   const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
     let error = false
     if (!error) {
            resolve({username: "saif", password: "123"})
     } else{
        reject('ERROR: Something went wrong')
     }
    }, 1000)
   })
promiseFour
.then((user) => {
    console.log(user);
    return user.username
   })
   .then((username) => {
   console.log(username);
   })
   .catch(function(error){
   console.log(error);
   })
   .finally(() => console.log("The Promise is either resolved or rejected"))


   const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
               resolve({username: "Javascript", password: "123"})
        } else{
           reject('ERROR: JS went wrong')
        }
       }, 1000)
   });

   async function consumedPromiseFive(){
    try {
     const response = await promiseFive
     console.log(response);
    } catch (error) {
     console.log(error);
    }
}
 
    consumedPromiseFive()


    // async function getAllUsers(){
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')

    //     const data = await response.json()
    //     console.log(data);
    //   } catch (error) {
    //     console.log("E: ", error);
    //   }
    // }

   // getAllUsers()

   fetch('https://jsonplaceholder.typicode.com/users')
   .then( (response) => {
    return response.json()
   })
   .then((data) => {
    console.log(data);
   })
   .catch((error) => console.log(error)) 
 // fetch Api is is used to fetching the resource from the network  and return the promise

 //A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
 //A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
 // Instead, a then() handler must check the Response.ok and/or Response.status properties.









