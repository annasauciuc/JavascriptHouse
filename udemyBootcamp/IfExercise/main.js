var age = parseInt(prompt("What is your age?"));
if (age < 0) {
  alert("Error");
} else if (age === 21) {
  alert("¡Happy 21 st birthday!!!");
} else if (age % 2 !== 0) {
  alert("Your age is odd"); //impar
} else if (age % Math.sqrt(age) === 0) {
  // if(!(age%Math.sqrt(age)))
  alert("Perfect square");
} else {
  "Wow you are " + age + " years old!";
}
