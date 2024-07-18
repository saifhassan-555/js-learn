const User = {
    _email: 'saif@123.com',
    _password: "hey123", // these are private properties variables getter and setter are special method which placed over the properties

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value

    }

}

const team = Object.create(User) //factory function
console.log(team.email);
// 10_classes_and_oop/object_get_set.js

// getter and setter is used to overwrite the memory process