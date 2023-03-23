// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charNum = ["1","2","3","4","5","6","7","8","9","0"];
var charUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charSpec = ["!","@","#","$","%","^","&","*"];





// Write password to the #password input

function getPassOption() {
  var length = prompt("How many characters?")
  if (length < 8 || length > 128) {
    alert("Password must meet criteria")
    return;

  }
  

  var hasUpper = confirm("Include upper case?")
  var hasLower = confirm("Include lower case?")
  var hasSpec = confirm("Include special characters?")
  var hasNum = confirm("Include numbers?")

  

  var passOption = {
  length: length,
  hasUpper: hasUpper,
  hasLower: hasLower,
  hasSpec: hasSpec,
  hasNum: hasNum,

  } 
  return passOption

}

function generatePassword() {
  var option = getPassOption()
  console.log(option)
  var finalPass = ""
  var possibleCharacters = []
  if (option.hasUpper) {
    possibleCharacters = possibleCharacters.concat(charUp)
  }
  if (option.hasLower) {
    possibleCharacters = possibleCharacters.concat(charLow)

  } 
  if (option.hasSpec) {
    possibleCharacters = possibleCharacters.concat(charSpec)
  }
  if (option.hasNum) {
    possibleCharacters = possibleCharacters.concat(charNum)
  }
  console.log(possibleCharacters)

  for (var i = 0; i < option.length; i++) {
    finalPass += possibleCharacters [Math.floor(Math.random() * possibleCharacters.length)]
  }



  return finalPass

}


  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
