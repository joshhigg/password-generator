var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","|","~"];

function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be?\n\nBetween 8 and 128 characters");
  if(!passwordLength) {
    return;
  } else if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Error, please enter a number between 8 and 128");
    return "Error, try again";
  }

  var includeLowercase = window.confirm("Should it include lowercase letters?");
  var includeUppercase = window.confirm("Should it include uppercase letters?");
  var includeSpecial = window.confirm("Should it include special characters?");

  //var potentialChar = [includeLowercase, includeUppercase, includeSpecial]

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
  }

    if(!includeLowercase && !includeUppercase && !includeSpecial) {
    return "Unable to generate password.  Please select OK for at least one type of character.";

    } else if (includeLowercase) {
      for(var i=0; i < passwordLength; i++) {
        return getRandom(lowercase);
      }
    return getRandom(lowercase);
    } else if (includeUppercase) {
    return getRandom(uppercase);
    } else if (includeSpecial) {
    return getRandom(special);
    }
    
  
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);