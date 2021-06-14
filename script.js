// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function calls the password generator function
// stores that result in a variable
//and writes the result
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//this function generates the password by first asking a desired character count between 8 and 128
//The if-loops sends the user back if invalid input is provided
function generatePassword() {
  let length = window.prompt("Select a number of characters between 8 and 128");
  if (length < 8 || length > 128) {
    window.alert("number needs to be between 8 and 128")
    return generatePassword()
  }
  if (isNaN(length)){
    window.alert("you need to type a number")
    return generatePassword()
  }


//This for-loop builds the password by selecting a randomized element from the charset
//The process repeats and adds a new character to the password until the desired character count is reached
  let retVal = "";
  charset = generateCharset();
  for(let i=0; i < length; i++) {
    console.log(length)
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

//this function generates the charset by providing a series of confirm boxes to choose between character types
//if no character sets are selected then the user is sent back to the start of the selection process
function generateCharset(){
  
  let lowercaseCheck = window.confirm("do you want lowercase characters (cancel for no)")

  let uppercaseCheck = window.confirm("do you want uppercase characters (cancel for no)")
  
  let numberCheck = window.confirm("do you want number characters (cancel for no)")
 
  let specialCheck = window.confirm("do you want special characters (cancel for no)")

  if(lowercaseCheck==false, uppercaseCheck==false, numberCheck==false, specialCheck==false){
    window.alert("you must choose at least one character set!!")
    return generateCharset();
  }

//the funtion builds an array of booleans (deteremind by the confirm boxes) along with a corresponding array of character sets
//the for-loop builds the character set by going through each element of the boolean array and adding its character sets if chosen 
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

