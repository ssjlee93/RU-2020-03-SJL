// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialcase = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var numbers = "0123456789".split("");

var upperorno;
var lowerorno;
var specialorno;
var numbersorno;
var pwlength;

// Write password to the #password input
function askCriteria() {
  pwlength = parseInt(prompt("Between 8~128 characters, how many password characters do you want?"));
  if ((pwlength < 8) || (pwlength > 128)){
    alert("Please select a number between 8 ~ 128.");
    location.reload();
    return;
  }

   upperorno = confirm("Do you want uppercase?");
   lowerorno = confirm("Do you want lowercase?");
   specialorno = confirm("Do you want special characters?");
   numbersorno = confirm("Do you want numbers?");

  if ((upperorno === false) && 
  (lowerorno === false) && 
  (specialorno === false) && 
  (numbersorno === false)) {
    alert("Choose at least one criterion");
    return;
  }

} 

function generatePassword() {
  askCriteria();
  
  var pwpool = [];
  var thepw = [];

  if (upperorno) {
    pwpool = pwpool.concat(uppercase); 
  } 

  if (lowerorno) {
    pwpool = pwpool.concat(lowercase); 
  } 

  if (specialorno) {
    pwpool = pwpool.concat(specialcase); 
  } 
  
  if (numbersorno) {
    pwpool = pwpool.concat(numbers); 
  } 

  for(var i = 0; i < pwlength; i++){
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
