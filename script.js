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

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "/",
  "|",
];

// List of const linking to id's in the html

const lowercaseEl = document.querySelector("#lowercase");
console.log(lowercaseEl);

const uppercaseEl = document.querySelector("#uppercase");
console.log(uppercaseEl);

const numberEl = document.querySelector("#numbers");
console.log(numberEl);

const specialcharactersEl = document.querySelector("#specialcharacters");
console.log(specialcharactersEl);

const userInputEl = document.querySelector("#userInput");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// event listners to check if the boxes are checked

lowercaseEl.addEventListener("click", function () {
  console.log(lowercaseEl.checked);
});

uppercaseEl.addEventListener("click", function () {
  console.log(uppercaseEl.checked);
});

numberEl.addEventListener("click", function () {
  console.log(numberEl.checked);
});

specialcharactersEl.addEventListener("click", function () {
  console.log(specialcharactersEl.checked);
});


console.log(userInputEl)
// WHEN prompted for the length of the password

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

function generatePassword() {
  console.log(generatePassword);
  var generatedPass = ("");
  for (var i = 0; i < userInputEl.value; i++) {
    
    console.log(generatedPass)
    {
      // to activate lowercase
      if (lowercaseEl.checked) {
        var lowercaseGen =
        lowercase[Math.floor(Math.random() * lowercase.length)];
        generatedPass = generatedPass + lowercaseGen;
      }

      // to activate uppercase
      if (uppercaseEl.checked) {
        var uppercaseGen =
          uppercase[Math.floor(Math.random() * uppercase.length)];
        generatedPass = generatedPass + uppercaseGen;
      }

      // to activate specialcharacters
      if (specialcharactersEl.checked) {
        var specialcharactersGen =
          specialcharacters[
            Math.floor(Math.random() * specialcharacters.length)
          ];
        generatedPass = generatedPass + specialcharactersGen;
      }
      // to activatate numbers
      if (numberEl.checked) {
        var num = Math.ceil(Math.random() * 9);
        generatedPass = generatedPass + num;
      }
    }
    
  }

var finalPass = generatedPass.slice(0, userInputEl.value);
console.log(finalPass)

return (finalPass);
}


// slice to size


// shuffle


  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
