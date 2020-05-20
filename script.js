function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("mySelector");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }

function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  /*var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
*/
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Check if checkboxes are checked

var upper = document.getElementById("checkUppercase").checked;
var lower = document.getElementById("checkLowercase").checked;
var numeric = document.getElementById("checkNumeric").checked;
var special = document.getElementById("checkSpecial").checked;