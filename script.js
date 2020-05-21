// Assignment Code
var generateBtn = document.querySelector("#generate");
var fromPrompt = prompt("Select number 8 through 128");
var totalCharacters = parseInt(fromPrompt);

console.log(totalCharacters);

var typesOfCharacters = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz".split(""),
    specialCharacters: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split(),
}

var useLowerCase = confirm("Use Lowercase?");
var useUpperCase = confirm("Use Uppercase?");
var useSymbols = confirm("Use Symbols?");
var useNumbers = confrim("Use Numbers?");

console.log ("L: ", useLowerCase);
console.log ("L: ", useLowerCase);
console.log ("L: ", useLowerCase);
console.log ("L: ", useLowerCase);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
