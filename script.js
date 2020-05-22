function generatePassword() {

var generateBtn = document.querySelector("#generate");
var fromPrompt = prompt("Select number 8 through 128");
var totalCharacters = parseInt(fromPrompt);
if (totalCharacters > 7 && totalCharacters < 129) {



console.log(totalCharacters);

var typesOfCharacters = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    specialCharacters: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~",
}

var useLowerCase = confirm("Use Lowercase?");
var useUpperCase = confirm("Use Uppercase?");
var useSymbols = confirm("Use Symbols?");
var useNumbers = confirm("Use Numbers?");

var possibleCharacters = [];

if (useLowerCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowerCase.split(""));
}
if (useUpperCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowerCase.toUpperCase().split(""));
}
if (useSymbols) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}
if (useNumbers) {
    for (var i = 0; i < 10; i++) {
        possibleCharacters.push(i);
    }
}

console.log(possibleCharacters);

var password = "";

for (var i = 0; i < totalCharacters; i++) {
    var position = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[position];
}

console.log(password);
return password;
} else {
    alert("Password must be between 8 and 128 characters...");
}
}
document.getElementById("generate").addEventListener("click", function() {
    var pText = document.getElementById("password");
    pText.value = generatePassword();
});