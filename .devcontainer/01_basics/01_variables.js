const accountId = 144553
let accountEmail = "anamika@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 1

accountEmail = "212121212"
accountPassword="shjdjhsdkj"
accountCity="kanpur"

/*
->Prefer not to use var
beacuse of issue in block scope and functional scope
->Also we can declare a variable using the semicolon
it depends we want to use or not.( Undefined)
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
