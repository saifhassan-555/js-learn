class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sub = new Teacher ("sub", "chai@123", "123")

 sub.addCourse();

 const drag = new User("drag")
 drag.logMe()

 //console.log(sub === drag); 
 //node 10_classes_and_oop/inheritance.js
  console.log(sub instanceof Teacher);