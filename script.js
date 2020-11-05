// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Arrays

var lowercase = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n", "o","p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z" ]
var uppercase = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J","K", "L", "M", "N", "O","P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"]
var specialcharacters = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")","_", "-", "+", "=", "/", "|"]

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// checkboxes in a prompt pop up when you click generate


const lowercaseEl = document.querySelector("#lowercase")
console.log(lowercaseEl)

const uppercaseEl = document.querySelector("#uppercase")
console.log(uppercaseEl)

const numberEl = document.querySelector("#numbers")
console.log(numberEl)

const specialcharactersEl = document.querySelector("#nspecialcharacters")
console.log(specialcharactersEl)



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

lowercaseEl.addEventListener("click", function(){
  console.log(lowercaseEl.checked)
})

uppercaseEl.addEventListener("click", function(){
  console.log(uppercaseEl.checked)
})

numberEl.addEventListener("click", function(){
  console.log(numberEl.checked)
})

specialcharactersEl.addEventListener("click", function(){
  console.log(specialcharactersEl.checked)
})

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
for (var i = 0; i < 1; i++) {

  var num = Math.ceil(Math.random() * 9);


  console.log(num);
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters







// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

function generatePassword() {




// to activate lowercase 
  if ("#lowercase" === true) {
  const random = Math.floor(Math.random() * lowercase.length);
  console.log(random, lowercase[random]);
  } else { 

  }

  
// to activate uppercase
if ("#uppercase" === true) {
  const random = Math.floor(Math.random() * uppercase.length);
  console.log(random, uppercase[random]);
} else {

}


// to activate specialcharacters
if ("#specialcharacters" === true) {
  const random = Math.floor(Math.random() * specialcharacters.length);
  console.log(random, specialcharacters[random]);
} else {

}
// to activatate numbers
if  ("#numbers" === true) {

  for (var i = 0; i < 1; i++) {

    var num = Math.ceil(Math.random() * 9);



  } 
} else {

}

}          



}




// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

