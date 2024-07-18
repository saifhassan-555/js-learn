function User(email, password){
 this._email = email;
 this._password = password

Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})
Object.defineProperty(this, 'passeord', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password = value
    }
})

}

const uni = new User("uni@555", "2345")
console.log(uni.email);

// getter and setter is used to overwrite the memory process
// 10_classes_and_oop/properties_get_set.js