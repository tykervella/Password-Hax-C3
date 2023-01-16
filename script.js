function generatePassword() {
  
  
  var passLength = parseInt(prompt("How Long Would you like your passcode?","Choose a number 8-128"));

  if (Number.isNaN(passLength) === true) {
    alert ("Please select a number!");
    return "Your passcode will appear here :)";
  } else if (passLength >= 128) {
    alert ("Please select a smaller number!");
    return "Your passcode will appear here :)";
  } else if (passLength <= 7){
    alert ("Please select a larger number!");
    return "Your passcode will appear here :)";
  }; 

  var characterType = ""
  var uppercase = confirm("Would you like to include uppercase letters?");

    if (uppercase === true) {
      characterType += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {
      characterType = characterType;
    };

  var lowercase = confirm("Would you like to include lowercase letters?"); 

    if (lowercase === true){
      characterType += "abcdefghijklmnopqrstuvwxyz"
    } else {
      characterType = characterType;
    };

  var numbs = confirm("Would you like to include numbers?");
    
    if (numbs === true){ 
      characterType += "0123456789"
    } else {
      characterType = characterType;
    };

  var specialchar = confirm("Would you like to include special characters?");

    if (specialchar === true) {
      characterType += ' !"#$%&()*+-./:;<=>?[]_^`|~'
    } else {
      characterType = characterType;
    };


    var result = "";
    var length = passLength;
    var characters = characterType;
    var charactersLength = characters.length;

    for (var i =0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }


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
