class User {
    constructor(email, password){
        this.email = email,
        this. password = password
    }
   get password(){
      return this._password.toUpperCase()
   }
  
    set password(value){
        this._password = value.toUpperCase()
    }

}

const saif = new User("saif@123", "saif")
console.log(saif.password);
// 10_classes_and_oop/getter_and_setter.js