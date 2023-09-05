// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be?\n\nBetween 8 and 128 characters");

  if(!passwordLength) {
    return;
  } else if(passwordLength < 8) {
    window.alert("Error, please enter a number between 8 and 128");
    return;
  } else if(passwordLength > 128) {
    window.alert("Error, please enter a number between 8 and 128");
    return;
  }

  var includeLowercase = window.confirm("Should it include lowercase letters?");
  var includeUppercase = window.confirm("Should it include uppercase letters?");
  var includeSpecial = window.confirm("Should it include special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
