var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyxz';
var uppercase = lowercase.toUpperCase();
var special = "!#$%&'()*+-./:;<>=?@[]^_|~";
var availableChoices = '';


function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be?\n\nBetween 8 and 128 characters"));
  if(!passwordLength) {
    return;
  } else if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Error, please enter a number between 8 and 128");
    return "Error, try again";
  }

  var includeLowercase = window.confirm("Should it include lowercase letters?");
  if(includeLowercase) {
    availableChoices += lowercase;
  }

  var includeUppercase = window.confirm("Should it include uppercase letters?");
  if(includeUppercase) {
    availableChoices += uppercase;
  }
  var includeSpecial = window.confirm("Should it include special characters?");
  if(includeSpecial) {
    availableChoices += special;
  }

  console.log(availableChoices);

  var password = '';
  for(var i=0; i < passwordLength; i++) {
    var randIndex = parseInt(Math.floor(Math.random() * availableChoices.length));
    var randomChar = availableChoices[randIndex];
    password += randomChar;
  }
  return password;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);