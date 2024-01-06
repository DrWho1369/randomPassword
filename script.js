// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = 0
var allChars = []
var passwordOptions;
// Function to prompt user for password options
function getPasswordOptions() {
    passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return;
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return;
    }
  
    
    if (includeLowercase) {
      allChars = [...allChars, ...lowerCasedCharacters];
    } 
    if (includeUppercase) allChars = [...allChars, ...upperCasedCharacters];
    if (includeNumeric) allChars = [...allChars, ...numericCharacters];
    if (includeSpecial) allChars = [...allChars, ...specialCharacters];
    console.log(`the allchars value at line 118 is ${allChars}`)
    console.log(`the passwordLength value at line 118 is ${passwordLength}`)
    return {
      allChars: allChars,
      passwordLength: passwordLength
    };
}

// Function for getting a random element from an array
function getRandom(options) {
  var password = "";
  for (var i = 0; i < options.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * options.allChars.length);
    password += options.allChars[randomIndex];
  }
  console.log(`the password value at line 127 is ${password}`)
  return password
}

// Function to generate password with user input
function generatePassword() {
  passwordOptions = getPasswordOptions();
  password = getRandom(passwordOptions);
  console.log(`the password value at line 136 is ${password}`)
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
  allChars = []
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);