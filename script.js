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







const li = document.createElement("li");
li.setAttribute("","")

('#generate').dialog({
  title: "Prompt",
  buttons: {
    "Lowercase Letters": function() {
      selected = 1;
    },
    "Uppercase Letters": function() {
      selected = 2;
    },
    "Numbers": function() {
      selected = 3;
    },
    "Speacial Characters": function() {
      selected = 4;
    }
  }
});
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

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



  if () {
  const random = Math.floor(Math.random() * lowercase.length);
  console.log(random, lowercase[random]);
  } else {

  }


if () {
  const random = Math.floor(Math.random() * uppercase.length);
  console.log(random, uppercase[random]);
} else {

}

if () {
  const random = Math.floor(Math.random() * specialcharacters.length);
  console.log(random, specialcharacters[random]);
} else {

}

if  () {

for (var i = 0; i < 1; i++) {

  var num = Math.ceil(Math.random() * 9);


  console.log(num);
}
}





}




// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
}
