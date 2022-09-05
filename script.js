// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//Variables of all charcter Arrays
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
//Variables of empty Arrays
  var userArray = [];
  var resultArray = [];

  uppercaseArray [1]
//Prompt to input desired amount of characters you want in you password
  var numCharacter = prompt ("How many Characters do you want in you password between 8 and 128?");
 //confirm yes or no button for types of characters you would like in your password  
  var numbers = confirm ("Would you like numbers in your password?");
  var uppercases = confirm ("Would you like Uppercases in your password?");
  var lowercases = confirm ("Would you like lowercases in your password?");
  var characters = confirm ("Would you like special characters in your password?");

  //if you selected yes or no for the of the above confirm buttons it will pull the the from the top variables and store in resultArray for use later
  if (numbers){
    resultArray = resultArray.concat(numbArray);
    
  }
  
  if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
  
  }
  
  if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  
  }
  
  if (characters){
    resultArray = resultArray.concat(characterArray);
  }
  //this will print the variables stored above from our if statments
  console.log(resultArray)
  
  // this will use the Math functions of floor and random to randomly select characters from our top varibales and only the ones defined in the above if statements
  for (var i = 0; i < numCharacter; i++) {
        
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
