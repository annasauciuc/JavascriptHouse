//create secret number
var secretNumbre = 4;

//ask user for guess
var guess = parseInt(prompt("Guess a number"));

//check guess is right

if (guess === secretNumbre) {
  alert("You got it right");
} else if (guess > secretNumbre) {
  alert("Your numbre is too big");
} else {
  alert("Your number is too little");
}
