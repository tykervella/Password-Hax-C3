

var passLength = parseInt(prompt("How Long Would you like your passcode?","8-64"));

var characterType = ""

var uppercase = confirm("Would you like to include uppercase letters?");

var lowercase = confirm("Would you like to include lowercase letters?"); 

var numbs = confirm("Would you like to include numbers?");

var specialchar = confirm("Would you like to include special characters?");

if (uppercase === true) {
  characterType += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} else {
  characterType = characterType;
};

if (lowercase === true){
  characterType += "abcdefghijklmnopqrstuvwxyz"
} else {
  characterType = characterType;
};

if (numbs === true){ 
  characterType += "0123456789"
} else {
  characterType = characterType;
};

if (specialchar === true) {
  characterType += ' !"#$%&()*+-./:;<=>?[]_^`|~'
} else {
  characterType = characterType;
};




console.log(passLength,typeof(passLength));

function generatePassword(length) {
  var result = "";
  var characters = characterType; 
  var charactersLength = characters.length;

  for (var i =0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

console.log(generatePassword(passLength));




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword) 
