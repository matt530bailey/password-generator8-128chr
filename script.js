// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwInput = prompt("Choose Password Length 8-128")
   console.log(pwInput)
  var pwLength = parseInt(pwInput)

  if (pwInput < 8 || pwInput > 128) {
    alert("Invalid Length")
    return "";
  } 
  if (isNaN(pwInput)) {
    alert("Not a Number");
    return "";
  }
  var pwWithNumbers = confirm("Would you like to include Number?");
  console.log(pwWithNumbers);
  var pwWithSymbols = confirm("Would you like to include Symbols?");
  console.log(pwWithSymbols);
  var pwWithLowerCase = confirm("Would you like to include Lower Case?");
  console.log(pwWithLowerCase);
  var pwWithUpperCase = confirm("Would you like to include Upper Case?");
  console.log(pwWithUpperCase);

  var pwNumbers = ["0","1","2","3","4","5","6","7","8","9"]
  var pwSymbols = ["!","@","#","$","%","&","*"]
  var pwLowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
  var pwUpperCase = []

  var pwOptionSelection = []

  for (var i = 0; i < pwLowerCase.length; i++) {
    // console.log(pwWithLowerCase[i])
    pwUpperCase[i] = pwLowerCase[i].toUpperCase()
  };
  if (pwWithNumbers) {
    pwOptionSelection = pwOptionSelection.concat(pwNumbers)
  }
  if (pwWithSymbols) {
    pwOptionSelection = pwOptionSelection.concat(pwSymbols)
  }
  if (pwWithLowerCase) {
    pwOptionSelection = pwOptionSelection.concat(pwLowerCase)
  }
  if (pwWithUpperCase) {
    pwOptionSelection = pwOptionSelection.concat(pwUpperCase)
  }
  else {
    alert("Must select at least one option.")
  }
  console.log(pwOptionSelection)
  var finalPw = "";
  for (var i = 0; i < pwInput; i++) {
    var nextCharPos = Math.floor(Math.random() * pwOptionSelection.length);
    finalPw += pwOptionSelection[nextCharPos];
  }
  return finalPw;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);