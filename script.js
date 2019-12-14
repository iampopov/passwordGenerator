//Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

//Numeric characters

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Lowercase characters

var lowerCase = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase characters

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var forCopy = [];

function generatePassword() {
  var pwdLength = prompt("Please enter the number between and 8 and 128 to establish password length");
  var specialCaseOption = confirm("Would you like special characters in your password?");
  var upperCaseOption = confirm("Would you like upper case letters in your password?");
  var lowerCaseOption = confirm("Would you like lower case letters in your password?");
  var numbersOption = confirm("Would you like numbers in your password?");

  var pwdChoices = {
    pwdLength: pwdLength,
    specialCaseOption: specialCaseOption,
    upperCaseOption: upperCaseOption,
    lowerCaseOption: lowerCaseOption,
    numbersOption: numbersOption
  }

  pool = [];

  if (specialCaseOption === true) {
    pool.push(specialCharacters);
  } 

  if (upperCaseOption === true) {
    pool.push(upperCase);
  }

  if (lowerCaseOption === true) {
    pool.push(lowerCase);
  }

  if (numbersOption === true) {
    pool.push(numericCharacters);
  } 

  if (specialCaseOption === false && upperCaseOption === false && lowerCaseOption === false && numbersOption === false) {
    var errr = true;
  }
  // console.log (errr);
  // console.log (pool);

  var poolJoined = pool.join(',');
  var poolArr = poolJoined.split(',');

  // console.log (poolArr);

  var randPwd = [];
  if (pwdLength > 7 && pwdLength <129) { //if (pwdLength > 7 && pwdLength <129) {
      for (var i = 0; i < pwdLength; i++) { // sub 8 with pwdLength
      randPwd.push(poolArr[Math.floor(Math.random() * poolArr.length)]);
  }
  }
  else {
      alert("Please refresh the page and enter the number between and 8 and 128 to establish password length")
  }

  // console.log (randPwd);
  if (errr === true) {
    alert (`Please start over and select at least one pool of variables for password to generate`)
  } else {
  forCopy.push(randPwd.join(''));
  return randPwd.join('');
  }
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

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
  var text = forCopy;
  navigator.clipboard.writeText(text).then(function(){

  })
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
// BONUS EVENT LISTENER
