// Expand password options on click

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var y = document.getElementById("mySelector");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }

// Display selection of range slider underneath slider

function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
}

// Create character set to randomly choose from when generating password

function getCharacterSet() {
    var upperCheck = document.getElementById("checkUppercase").checked;
    var lowerCheck = document.getElementById("checkLowercase").checked;
    var numericCheck = document.getElementById("checkNumeric").checked;
    var specialCheck = document.getElementById("checkSpecial").checked;

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvqxyz";
    var numeric = "0123456789";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var charSet = "";

    if (upperCheck) {
        charSet += upper;
    } 
    if (lowerCheck) {
        charSet += lower;
    } 
    if (numericCheck) {
        charSet += numeric;
    } 
    if (specialCheck) {
        charSet += special;
    }
    
    return charSet;
}

// Write logic for password generation

function generatePassword() {

    var charSet = getCharacterSet();
    var lengthString = document.getElementById("range").value;
    var generatedPassword = "";

    var length = parseInt(lengthString);

    for (i = 0; i < length; i++) {
        generatedPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }

    return generatedPassword;
}

// Write password to the #password input

function writePassword() {
    
    var password = generatePassword();
    
    // Generate variable so that we can print password text
    var passwordText = document.querySelector("#password");

    // Assign result of generatePassword function as value of passwordText to print on card
    passwordText.value = password;

}

// Generate variable in order to add event listener

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button to execute writePassword function on click

generateBtn.addEventListener("click", writePassword);