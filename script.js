// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  console.log(password)
  passwordText.value = password;

}

function generatePassword() {
  let length = window.prompt("How many characters?");
  let retVal = "";
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  console.log(length)

  for(let i=0; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
