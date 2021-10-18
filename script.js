// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

// possible outputs that can be generated

function getPassword() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!@#$%^&*()_+{}|[];:',./<>?";
  var numbers = "1234567890";
  var passwordConditions = "";
  var password = "";

  var passwordLength = prompt(
    "How many characters would you like your password to contain? Please enter a value between 8 to 128.");
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid length. The value has to be between 8 to 128.");
    return;}
  
  else {
    var symbolsValue = confirm ("Click OK to include special characters")
    var numbersValue = confirm ("Click OK to include numeric characters.")
    var lowerLettersValue = confirm ("Click OK to include lowercase characters.")
    var upperLettersValue = confirm ("Click OK to include uppercase characters.")
  }

//conditionals: if confirmed, add value to conditions
  if (symbolsValue){passwordConditions += symbols}
  if (numbersValue){passwordConditions += numbers}
  if (lowerLettersValue){passwordConditions += lowerLetters}
  if (upperLettersValue){passwordConditions += upperLetters}


  for (i=0; i < passwordLength; i++) {
    password += passwordConditions[Math.floor(Math.random()*passwordConditions.length)]
  }
    return(password)
}



//writing the password
function writePassword(password) {
  if (password.length === 0){
    return
  }
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function() { writePassword(getPassword()) });
