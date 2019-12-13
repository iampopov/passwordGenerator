//Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

//Numeric characters

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Lowercase characters

var lowerCase = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase characters

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pool = specialCharacters.concat(numericCharacters, lowerCase, upperCase); // works well
var randPwd = [];

for (var i = 0; i < 8; i++) {
    randPwd.push(pool[Math.floor(Math.random() * pool.length)]);
}

console.log(randPwd.join(''));

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}


function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
