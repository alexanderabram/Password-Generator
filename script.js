// Assignment Code
var generateBtn = document.querySelector("#generate");
var fromPrompt = prompt("Select number 8 through 128");
var totalCharacters = parseInt(fromPrompt);

console.log(totalCharacters);

var typesOfCharacters = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    specialCharacters: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~",
}

var useLowerCase = confirm("Use Lowercase?");
var useUpperCase = confirm("Use Uppercase?");
var useSymbols = confirm("Use Symbols?");
var useNumbers = confirm("Use Numbers?");

console.log ("L: ", useLowerCase);
console.log ("U: ", useUpperCase);
console.log ("S: ", useSymbols);
console.log ("N: ", useNumbers);

var possibleCharacters = [];

if (useLowerCase){
    possibleCharacters.concat(typesOfCharacters.lowerCase.split(""));
}
if (useUpperCase){
    possibleCharacters.concat(typesOfCharacters.lowerCase.toUpperCase().split(""));
}
if (useSymbols){
    possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}
if (useNumbers) {
    
}

console.log(possibleCharacters);

var password = "";

for (var i = 0; i < totalCharacters; i++) {
    password = password + i;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
