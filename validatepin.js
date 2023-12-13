let  validate_pin = (pin) =>{

//  return Number(pin) && pin.length === 4 || pin.length === 6 ? true : false
 return /^(\d{4}|\d{6})$/.test(pin) //On regarde si la chaîne commence ^ par 4 chiffres \d{4} ou 6 chiffres \d{6} puis se termine $
}


console.log(validate_pin("1234"))
console.log(validate_pin("12345"))
console.log(validate_pin("a135"))
console.log(validate_pin("5135"))

console.log(validate_pin("661355"))