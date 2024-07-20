class User{
    constructor(username){
   this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    
    static createID(){
        return `123`
    }
}
const saif = new User("saif")   // this portion is called set of class object of class
// console.log(saif.createID());

class Teacher extends User {
    constructor(username, email){   
         super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createID()); //by using static keyword before createID it will not access in other instances