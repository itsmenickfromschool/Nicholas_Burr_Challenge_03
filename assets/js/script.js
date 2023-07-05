// Assignment code here

/* I had a frustrating time trying to add a backslash to the special characters because In JavaScript \ is an escape character 
and I see it says to add two \\ to render one but it's not a requirement to have it in an array so I'm skipping it and using what I have have defined already */


function generatePassword() {
  alert('Hello, This App will generate a secure password.\nClick through prompts to determine your password criteria');
  var passwordPrompt = prompt('Enter the desired length of your password as a number. \n it can be between 8 or 128 characters\n Example: 23');
  passwordLength = parseInt(passwordPrompt);
  const lengthCheck = function(){
    
    if(passwordLength < 8 || passwordLength > 128){
      alert('Oops, your password needs to be between 8 and 128 characters, and a number!.\n Try again!')
      passwordLength = prompt('Enter the desired length of your password.\n it can be between 8 or 128 characters\n Example:19');
      lengthCheck();
    } 
    else {alert('Thanks your password will be ' + passwordLength + ' characters.')}
  }


  lengthCheck();
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~'];
var passwordArray = []
passwordFinal = ""
  
  if(confirm('Do you want to use lowercase characters in your password?') === true) {
    var passwordArray = passwordArray.concat(lowerCase);
    };
  if(confirm('Do you want to use uppercase characters in your password?') === true) {
    var passwordArray = passwordArray.concat(upperCase);
  };
  if(confirm('Do you want to use numeric characters in your password?') === true){
    var passwordArray = passwordArray.concat(numericCharacters);
  };
  if(confirm('Do you want to use special characters in your password?') === true){
    var passwordArray = passwordArray.concat(specialCharacters);
  };
  alert('Thanks for selecting which characters to use.\n Exit this popup and your password will be in the box!')
  console.log(passwordArray);
for (var i=0; i < passwordLength; i++){
  passwordFinal = passwordFinal.concat(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
}
  password = passwordFinal
  return password

}






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
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


    

  