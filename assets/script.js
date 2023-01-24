// Function built to generate a password. 

function generatePassword() {
  
  // turns the string prompt into a number, turns the entry into a variable that will be used later to generate the password of the desired length.
  var passLength = parseInt(prompt("How long would you like your passcode to be?","Choose a number 8-128"));

  // Checks if password entry was empty or outside of the range of 8-128. If the password length does not fit within the range it directs a user on how to correctly input a password length. 
  if (Number.isNaN(passLength) === true) {
    alert ("Please select a number!");
    return "Your passcode will appear here :)";
  } else if (passLength >= 129) {
    alert ("Please select a smaller number!");
    return "Your passcode will appear here :)";
  } else if (passLength <= 7){
    alert ("Please select a larger number!");
    return "Your passcode will appear here :)";
  }; 

  // Creates an empty string that will be populated. variable will be used to chose the random characters that will be included in the final project
  var characterType = ""

  // asks if user wants to include capital letters, if so adds capital letters to the characterType string. 
  var uppercase = confirm("Would you like to include uppercase letters?");

    if (uppercase === true) {
      characterType += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {
      characterType = characterType;
    };

  // asks if user wants to include lowercase letters, if so adds lower letters to the characterType string. 
  var lowercase = confirm("Would you like to include lowercase letters?"); 

    if (lowercase === true){
      characterType += "abcdefghijklmnopqrstuvwxyz"
    } else {
      characterType = characterType;
    };

  // asks if user wants to include numbers, if so adds numbers to the characterType string. 
  var numbs = confirm("Would you like to include numbers?");
    
    if (numbs === true){ 
      characterType += "0123456789"
    } else {
      characterType = characterType;
    };

  // asks if user wants to include special characters, if so adds special characters to the characterType string. 
  var specialchar = confirm("Would you like to include special characters?");

    if (specialchar === true) {
      characterType += '!"#$%&*+-./:;<=>?[]_^`|~'
    } else {
      characterType = characterType;
    };

  // Checks that user has selected at least one character type to include in their password. If not, it will guide them to choose at least one character type. 
  if (characterType === "") {
    alert ("You have to select at least one character type to include in your password!");
    return "Your passcode will appear here :)";
  };

  // Creates variables that will be used in the function that actually randomizes the password for their character. 
    var result = ""
    var length = passLength;
    var charactersLength = characterType.length;

  // takes user input for length and iterates through a function of that length. Randomly selects a single character included in the characterType string for each digit in the password.
    for (var i =0; i < length; i++){
      result += characterType.charAt(Math.floor(Math.random() * charactersLength));
    }

// returns the password to display in the #password element on the webpage
  return result;

}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
