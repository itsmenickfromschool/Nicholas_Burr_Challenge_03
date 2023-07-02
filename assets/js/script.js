// Assignment code here
prompt

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 /* Psuedocode 
  On the click of event listener 
    I want to prompt the user about passwords
  When I click I will be presented with options for password criteria This includes
    Length- 
      Between 8 and 128 characters
    charType 
      Get to select what type of characters to use (Lowercase, Uppercase, Numeric, Special)(4)
    After each prompt is answered, Input needs to be validated
    After prompts are answered ask for a complete button. (Confirm?)
      When this button is clicked generate the password and store it as a variable type = string
  Display: Password
    Make the code simple! 
    */


    

  