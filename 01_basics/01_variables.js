const accountId = 144533
let accountEmail = "saif@google.com"
var accountPassword = "12345"
accountCity = "Islamabad"
let accountState;

// accountId = 2 not allowed {} the braces are called scope

accountEmail ="hassan@google.com"
accountPassword ="22222"
accountCity ="Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])