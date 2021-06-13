// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("derp")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  let length = window.prompt("Select a number of characters between 8 and 128");
  if (length < 8 || length > 128) {
    let test = window.confirm("must be between 8 and 128 characters");
    if (test == true){
      return generatePassword()
    }
    if (test == false){
      return "Your Secure Password"
    }
  }

  let retVal = "";
  console.log("derp2")
  charset = generateCharset();

  for(let i=0; i < length; i++) {
    console.log(length)
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}


function generateCharset(){
  
  let lowercaseCheck = window.confirm("do you want lowercase characters (cancel for no)")

  let uppercaseCheck = window.confirm("do you want uppercase characters (cancel for no)")
  
  let numberCheck = window.confirm("do you want number characters (cancel for no)")
 
  let specialCheck = window.confirm("do you want special characters (cancel for no)")

  test = [lowercaseCheck, uppercaseCheck, numberCheck, specialCheck]
  chararray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()<>?[]{};'"]
  let charset = "";

  for (i=0; i<4; i++) {
    if(test[i]==true)
    charset = chararray[i] + charset;
    console.log(charset)
  }
  
return charset

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

