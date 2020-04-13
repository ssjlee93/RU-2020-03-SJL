// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialcase = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var numbers = "0123456789".split("");

// Write password to the #password input
function askCriteria() {
  var pwlength = parseInt(prompt("Between 8~128 characters, how many password characters do you want?"));
  if ((pwlength < 8) || (pwlength > 128)){
    alert("Please select a number between 8 ~ 128.");
    location.reload();
    return;
  }

  var upperorno = confirm("Do you want uppercase?");
  var lowerorno = confirm("Do you want lowercase?");
  var specialorno = confirm("Do you want special characters?");
  var numbersorno = confirm("Do you want numbers?");

  if ((upperorno === false) && 
  (lowerorno === false) && 
  (specialorno === false) && 
  (numbersorno === false)) {
    alert("Choose at least one criterion");
    return;
  }

  var criteria = {
    length: pwlength,
    hasUpper: upperorno,
    hasLower: lowerorno,
    hasSpecial: specialorno,
    hasNumbers: numbersorno
  }
  return criteria;
} 

function generatePassword() {
  var criteria = askCriteria();
  
  var pwpool = [];
  var thepw = [];

  if (criteria.hasUpper) {
    pwpool = pwpool.concat(uppercase); 
  } 

  if (criteria.hasLower) {
    pwpool = pwpool.concat(lowercase); 
  } 

  if (criteria.hasSpecial) {
    pwpool = pwpool.concat(specialcase); 
  } 
  
  if (criteria.hasNumbers) {
    pwpool = pwpool.concat(numbers); 
  } 

  for(var i = 0; i < criteria.length; i++){
    var randomIndex = Math.floor(Math.random() * pwpool.length);
    var picking = pwpool[randomIndex];
      thepw.push(picking);
    }
    return thepw.join("");
    
}

function printpw() {
  var myPW = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = myPW;
}

// Add event listener to generate button
generateBtn.addEventListener("click", printpw);
