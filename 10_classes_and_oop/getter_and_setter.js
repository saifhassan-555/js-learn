class User {
    constructor(email, password){
        this.email = email,
        this. password = password
    }
     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
         this._email = value
     }

   get password(){
    //   return this._password.toUpperCase()
      return `${this._password}saif` // can change password here in getter and setter will return the same value written at here
   }
  
    set password(value){
        this._password = value.toUpperCase()
    }

}

const saif = new User("saif@123", "saif")
console.log(saif.email);

// getter and setter is used to overwrite the memory process
// 10_classes_and_oop/getter_and_setter.js
// ES2022 Private Properties Proposal
//class ClassWithPrivate {
//     #privateField;
//     #privateFieldWithInitializer = 42;
  
//     #privateMethod() {
//       // …
//     }
  
//     static #privateStaticField;
//     static #privateStaticFieldWithInitializer = 42;
  
//     static #privateStaticMethod() {
//       // …
//     }
//   }
  